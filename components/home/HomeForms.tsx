"use client";

import { useEffect, useId, useRef, useState } from "react";
import { validateForm, type FormAvailability, type FormKind } from "@/lib/forms/validation";
import { contact, sessionFacts, whatsappHref } from "@/data/content";
import styles from "./HomeForms.module.css";

function Form({ kind, enabled }: { kind: FormKind; enabled: boolean }) {
  const id = useId();
  const pending = useRef(false);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "demo">("idle");
  const [message, setMessage] = useState("");
  const newsletter = kind === "newsletter";
  const callback = kind === "callback";
  useEffect(() => setReady(true), []);
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const payload = { ...Object.fromEntries(data), kind, consent: data.get("consent") === "on" };
    if (!validateForm(payload)) {
      setStatus("error"); setMessage("Lütfen adınızı ve iletişim bilgilerinizi kontrol edin.");
      return;
    }
    if (!enabled) {
      setStatus("demo");
      setMessage("Demo tamamlandı. Bilgileriniz gönderilmedi veya kaydedilmedi.");
      return;
    }
    pending.current = true;
    setStatus("sending"); setMessage("");
    try {
      const response = await fetch("/api/forms", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) {
        setStatus("error");
        setMessage(response.status === 429 ? "Kısa sürede birden fazla deneme yaptınız. Bir dakika sonra yeniden deneyebilirsiniz."
          : response.status === 503 ? "Form şu anda gönderime açık değil. WhatsApp’tan yazabilirsiniz."
          : "İşlem tamamlanamadı. Bilgilerinizi kontrol edip yeniden deneyebilirsiniz.");
        return;
      }
      form.reset(); setStatus("success");
      setMessage(newsletter ? "Bülten aboneliğiniz oluşturuldu. Teşekkür ederiz."
        : callback ? "Geri arama talebiniz iletildi. Teşekkür ederiz." : "İletişim talebiniz iletildi. Teşekkür ederiz.");
    } catch {
      setStatus("error"); setMessage("Bağlantı kurulamadı. Yeniden deneyebilir veya WhatsApp’tan yazabilirsiniz.");
    } finally { pending.current = false; }
  };
  return <form className={`${styles.form} ${newsletter ? styles.newsletter : ""}`} method="post" action="/api/forms" onSubmit={submit} aria-label={newsletter ? "Bülten aboneliği" : callback ? "Geri arama talebi" : "İletişim talebi"} aria-busy={status === "sending"}>
    <noscript><p className={styles.demo}>Formu kullanmak için JavaScript’i etkinleştirin veya <a href={whatsappHref}>WhatsApp’tan yazın</a>.</p></noscript>
    {!enabled && <p className={styles.demo}>Demo formu · Bilgileriniz gönderilmez veya kaydedilmez.</p>}
    <fieldset className={styles.fields} disabled={!ready || status === "sending"}>
    <legend className="visually-hidden">{newsletter ? "Abonelik bilgileriniz" : "İletişim bilgileriniz"}</legend>
    {!newsletter && <div className={styles.field}><label htmlFor={`${id}-name`}>Adınız ve soyadınız</label><input id={`${id}-name`} name="name" autoComplete="name" required minLength={2} maxLength={100} /></div>}
    {callback ? <>
      <div className={styles.field}><label htmlFor={`${id}-phone`}>Telefon numaranız</label><input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={40} placeholder="05XX XXX XX XX" onInput={event => event.currentTarget.setCustomValidity("")} onBlur={event => {const count=event.currentTarget.value.replace(/\D/g, "").length; event.currentTarget.setCustomValidity(count >= 10 && count <= 13 ? "" : "Lütfen geçerli bir telefon numarası yazın.");}} /></div>
      <div className={styles.field}><label htmlFor={`${id}-time`}>Size ne zaman ulaşalım? <span>(isteğe bağlı)</span></label><select id={`${id}-time`} name="preferredTime" defaultValue=""><option value="">Zaman aralığı seçin</option><option>Hafta içi sabah</option><option>Hafta içi öğleden sonra</option><option>Hafta içi akşam</option><option>Fark etmez</option></select></div>
    </> : <div className={styles.field}><label htmlFor={`${id}-email`}>E-posta adresiniz</label><input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} /></div>}
    {kind === "contact" && <div className={styles.field}><label htmlFor={`${id}-subject`}>Ne hakkında bilgi almak istersiniz?</label><select id={`${id}-subject`} name="subject" defaultValue="Görüşme süreci"><option>Görüşme süreci</option><option>Online bireysel danışma</option><option>LGS ve YKS eğitim danışmanlığı</option><option>Çalışma konuları</option><option>Diğer iletişim talepleri</option></select></div>}
    <div className={styles.trap} aria-hidden="true"><label htmlFor={`${id}-company`}>Kurum</label><input id={`${id}-company`} name="company" tabIndex={-1} autoComplete="off" /></div>
    <label className={styles.consent}><input name="consent" type="checkbox" required /><span>{newsletter ? "Yeni yazı ve notları e-posta ile almak istiyorum. " : "İletişim bilgilerimin talebime dönüş yapılması için kullanılmasını kabul ediyorum. "}<a href="/buse-saridas-demo/gizlilik/" target="_blank" rel="noopener noreferrer">Gizlilik metni<span className="visually-hidden"> (yeni sekme)</span></a></span></label>
    <button className={styles.submit} type="submit" disabled={status === "sending"}><span aria-hidden="true"/>{status === "sending" ? "Gönderiliyor…" : newsletter ? "Abone ol" : callback ? "Beni arayın" : "İletişim talebi gönder"}<span aria-hidden="true">↗</span></button>
    </fieldset>
    <p className={styles.status} data-status={status} role="status" aria-live="polite">{message}</p>
  </form>;
}

export function HomeContact({ availability }: { availability: FormAvailability }) {
  const [kind, setKind] = useState<"contact" | "callback">("callback");
  useEffect(() => {
    const callback = () => setKind("callback");
    window.addEventListener("home:callback", callback);
    return () => window.removeEventListener("home:callback", callback);
  }, []);
  return <section id="iletisim" className={styles.contact} aria-labelledby="contact-heading">
    <header className={styles.contactHeader} data-calm-heading><h2 id="contact-heading">İlk adımı birlikte atalım.</h2><p>Görüşme süreci hakkında bilgi almak için size uygun iletişim yolunu seçebilirsiniz.</p></header>
    <div className={styles.contactBody}>
    <div className={styles.copy}><h3>Bir mesajla başlayabilirsiniz.</h3><p>Merak ettiklerinizi sorabilir, görüşme sürecini birlikte netleştirebiliriz.</p>
    <a className={styles.whatsapp} href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden yazın — yeni sekmede açılır">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.5c-4.7 0-8.5 3.5-8.5 7.8 0 1.6.5 3.1 1.5 4.3L4 20.5l5.1-1.3c.9.3 1.9.5 2.9.5 4.7 0 8.5-3.5 8.5-7.8S16.7 3.5 12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
      WhatsApp’tan yazın
    </a>
    <details className={styles.factDetails}><summary>Görüşme bilgileri <span aria-hidden="true">+</span></summary><dl className={styles.facts}>{sessionFacts.map(fact => <div key={fact.term}><dt>{fact.term}</dt><dd>{fact.detail}</dd></div>)}</dl></details>
    <p className={styles.channelNote}>{contact.channelNote}</p></div>
    <div id="geri-arama" className={styles.formColumn}>
      <div className={styles.switch} role="group" aria-label="İletişim tercihiniz"><button type="button" aria-pressed={kind === "callback"} onClick={()=>setKind("callback")}>Geri arama</button><button type="button" aria-pressed={kind === "contact"} onClick={()=>setKind("contact")}>E-posta ile dönüş</button></div>
      <h3>{kind === "callback" ? "Telefonla dönüş isteyin." : "E-posta ile dönüş isteyin."}</h3>
      <Form key={kind} kind={kind} enabled={availability.contact} />
    </div>
    </div>
  </section>;
}
export function NewsletterForm({ enabled }: { enabled: boolean }) { return <Form kind="newsletter" enabled={enabled} />; }

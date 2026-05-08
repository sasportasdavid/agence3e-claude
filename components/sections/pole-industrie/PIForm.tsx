import { form } from "@/content/poleIndustrie";
import { LeadForm, SubmitButton } from "@/components/LeadForm";

export function PIForm() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <div className="bg-[var(--color-pastel-green)] rounded-[32px] p-20 relative overflow-hidden grid grid-cols-[1fr_1.3fr] gap-16 reveal max-[1100px]:grid-cols-1 max-[1100px]:p-12">
          <div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[200px]"
            style={{
              background:
                "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 50%, transparent 100%)",
              filter: "blur(100px)",
              opacity: 0.7,
            }}
          />
          <div className="relative z-[1]">
            <span className="eyebrow">{form.eyebrow}</span>
            <h2
              className="font-bold tracking-[-0.03em] leading-[1.05] mt-5"
              style={{ fontSize: "clamp(32px, 2.8vw, 44px)" }}
            >
              {form.title.lead}
              <br />
              <span className="it" style={{ fontSize: "inherit" }}>
                {form.title.it}
              </span>
            </h2>
            <div className="flex flex-col gap-3.5 mt-8">
              {form.reass.map((r) => (
                <div key={r.strong} className="flex gap-3 items-start">
                  <div className="w-[22px] h-[22px] rounded-full bg-[var(--color-secondary)] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <p className="m-0 text-sm">
                    <strong className="text-[var(--color-primary)]">
                      {r.strong}
                    </strong>{" "}
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm
            source="pole-industrie"
            className="relative z-[1] bg-white rounded-[20px] p-9 shadow-[0_24px_48px_-12px_rgba(10,37,64,0.10)] grid grid-cols-2 gap-[18px] max-[1100px]:grid-cols-1 max-[1100px]:p-7"
          >
            <Field
              name="raison-sociale"
              label={form.fields.raisonSociale.label}
              placeholder={form.fields.raisonSociale.placeholder}
            />
            <Field
              name="siret"
              label={form.fields.siret.label}
              placeholder={form.fields.siret.placeholder}
            />
            <SelectField
              name="secteur"
              label="Secteur principal"
              options={form.fields.secteurOptions}
            />
            <SelectField
              name="conso"
              label="Conso annuelle"
              options={form.fields.consoOptions}
            />
            <Field
              name="email"
              type="email"
              label={form.fields.email.label}
              placeholder={form.fields.email.placeholder}
            />
            <Field
              name="phone"
              type="tel"
              label={form.fields.phone.label}
              placeholder={form.fields.phone.placeholder}
            />
            <div className="col-span-2 max-[1100px]:col-span-1">
              <FieldLabel>{form.fields.contexte.label}</FieldLabel>
              <textarea
                name="contexte"
                placeholder={form.fields.contexte.placeholder}
                className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] min-h-[90px] resize-y focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
              />
            </div>
            <div className="col-span-2 max-[1100px]:col-span-1">
              <SubmitButton className="w-full justify-center">
                {form.cta}
              </SubmitButton>
            </div>
          </LeadForm>
        </div>
      </div>
    </section>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase block mb-1.5">
      {children}
    </label>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        name={name}
        className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

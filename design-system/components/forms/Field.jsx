import React from 'react';

/* Underline-only field: no box, no fill. The bottom hairline turns accent on
   focus and danger when invalid. Error text is mono, below the control. */
export function Field({ id, name, label, type = 'text', value, placeholder, required = false, invalid = false, error, full = false, textarea = false, rows = 4, onChange, onBlur }) {
  const Control = textarea ? 'textarea' : 'input';
  const fieldId = id || `field-${name}`;
  return (
    <div className={`field${full ? ' field--full' : ''}`} data-invalid={invalid ? 'true' : 'false'}>
      <label className="mono" htmlFor={fieldId}>{label}</label>
      <Control
        className="control"
        id={fieldId}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? rows : undefined}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-invalid={invalid}
        aria-describedby={invalid ? `err-${name}` : undefined}
        onChange={onChange}
        onBlur={onBlur}
      />
      {invalid && error ? (
        <span className="fieldError mono" id={`err-${name}`}>{error}</span>
      ) : null}
    </div>
  );
}

import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Calendar, Check, Clock, Mail, Tag } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const topics = [
  'Manuscript review',
  'Technical writing',
  'Research summary',
  'AI / prompt consulting',
  'General inquiry',
];

const timeSlots = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '04:00 PM',
  '06:00 PM',
];

type BookingState = 'form' | 'submitting' | 'success' | 'error';

export default function BookingSection() {
  const today = new Date().toISOString().split('T')[0];

  const [state, setState] = useState<BookingState>('form');
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: topics[0],
    date: '',
    time: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === 'submitting') return;

    setState('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('bookings').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        topic: form.topic,
        preferred_date: form.date,
        preferred_time: form.time,
        message: form.message.trim() || null,
      });

      if (error) throw error;
      setState('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setState('error');
    }
  };

  const resetForm = () => {
    setForm({ name: '', email: '', topic: topics[0], date: '', time: '', message: '' });
    setState('form');
  };

  if (state === 'success') {
    return (
      <div className="booking-card booking-success">
        <div className="success-icon"><Check size={32} strokeWidth={2.5} /></div>
        <h3>Booking request sent</h3>
        <p>
          Thanks, {form.name.split(' ')[0]}. I'll review your request and get back to you
          at <strong>{form.email}</strong> within 24 hours to confirm the details.
        </p>
        <div className="success-summary">
          <div><Tag size={14} /> {form.topic}</div>
          <div><Calendar size={14} /> {form.date}</div>
          <div><Clock size={14} /> {form.time}</div>
        </div>
        <button className="button button-primary" onClick={resetForm}>
          Book another <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <form className="booking-card" onSubmit={handleSubmit}>
      <div className="booking-row">
        <label className="field">
          <span className="field-label">Your name</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Jane Doe"
          />
        </label>
        <label className="field">
          <span className="field-label">Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="jane@example.com"
          />
        </label>
      </div>

      <div className="field">
        <span className="field-label">What's this about?</span>
        <div className="topic-chips">
          {topics.map((t) => (
            <button
              type="button"
              key={t}
              className={form.topic === t ? 'chip is-active' : 'chip'}
              onClick={() => update('topic', t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="booking-row">
        <label className="field">
          <span className="field-label">Preferred date</span>
          <input
            type="date"
            required
            min={today}
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
          />
        </label>
        <div className="field">
          <span className="field-label">Preferred time</span>
          <div className="time-slots">
            {timeSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                className={form.time === slot ? 'chip is-active' : 'chip'}
                onClick={() => update('time', slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <label className="field">
        <span className="field-label">Additional notes <em className="optional">optional</em></span>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell me a bit about what you need…"
        />
      </label>

      {state === 'error' && <p className="booking-error">{errorMsg}</p>}

      <button
        type="submit"
        className="button button-primary booking-submit"
        disabled={state === 'submitting' || !form.date || !form.time}
      >
        {state === 'submitting' ? 'Sending…' : 'Request booking'} <ArrowUpRight size={17} />
      </button>
      <p className="booking-hint">
        <Mail size={13} /> Prefer email? Reach me directly at tansen.kumar098@gmail.com
      </p>
    </form>
  );
}

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  Clock3,
  HeartHandshake,
  MapPin,
  Menu,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Ticket,
  Users,
  X,
} from 'lucide-react';

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For people', href: '#for-people' },
  { label: 'For organizations', href: '#organizations' },
];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="QueueLess home" data-testid="link-home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#245750] text-[#f7f4ea]">
        <Ticket size={19} strokeWidth={1.8} />
      </span>
      <span className="text-[19px] font-bold tracking-[-.055em] text-[#1d3835]">QueueLess</span>
    </a>
  );
}

function ArrowLink({ href, children, dark = false }: { href: string; children: string; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full px-6 text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d66d4c] ${
        dark
          ? 'bg-[#244f49] text-[#fbf7ee] hover:bg-[#173f39]'
          : 'bg-[#d96e4c] text-white hover:bg-[#c35e40]'
      }`}
      data-testid={`link-${children.toLowerCase().replaceAll(' ', '-')}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function TicketIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[510px]">
      <div className="absolute -left-9 top-10 h-24 w-24 rounded-full bg-[#e7c68d]/55 blur-2xl" />
      <div className="absolute -right-3 bottom-4 h-32 w-32 rounded-full bg-[#d96e4c]/20 blur-2xl" />
      <div className="relative rounded-[34px] border border-[#e1ded3] bg-[#eeece2] p-5 shadow-[0_24px_70px_rgba(28,54,50,.11)] sm:p-7">
        <div className="mb-5 flex items-center justify-between px-1">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#777e72]">The better way to wait</p>
            <p className="mt-1 text-[13px] font-semibold text-[#31544c]">A little more room in your day</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e2e8d7] text-[#3f6958]">
            <Clock3 size={19} />
          </div>
        </div>
        <div className="ticket-shadow relative overflow-hidden rounded-[25px] bg-[#fffdf7]">
          <div className="flex items-start justify-between p-6 pb-5 sm:p-8 sm:pb-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#8b8e81]">Your place, made clear</p>
              <p className="serif mt-4 text-[50px] leading-none tracking-[-.055em] text-[#244f49] sm:text-[60px]">Wait, less.</p>
            </div>
            <div className="flex h-12 w-12 rotate-[-8deg] items-center justify-center rounded-[15px] bg-[#f3dfd4] text-[#ca684a]">
              <Ticket size={23} strokeWidth={1.7} />
            </div>
          </div>
          <div className="mx-6 border-t border-dashed border-[#d9d7ca] sm:mx-8" />
          <div className="flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8eee3] text-[#517261]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#284a43]">Your day, not the waiting room</p>
                <p className="mt-0.5 text-[11px] text-[#85887d]">A concept for more considerate service</p>
              </div>
            </div>
            <ArrowDownRight size={19} className="shrink-0 text-[#c66b4f]" />
          </div>
          <div className="absolute -left-[10px] top-[51%] h-5 w-5 -translate-y-1/2 rounded-full bg-[#eeece2]" />
          <div className="absolute -right-[10px] top-[51%] h-5 w-5 -translate-y-1/2 rounded-full bg-[#eeece2]" />
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[#777e72]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d96e4c]" />
          Less standing around. More life in between.
        </div>
      </div>
      <div className="absolute -bottom-5 -left-2 hidden items-center gap-2 rounded-full border border-[#e2ded2] bg-[#faf8f1] px-4 py-2.5 text-[12px] font-medium text-[#48665b] shadow-sm sm:flex">
        <HeartHandshake size={15} className="text-[#d96e4c]" />
        Designed around people
      </div>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="site-shell min-h-[100dvh]">
      <header className="sticky top-0 z-40 border-b border-[#e7e3d8]/85 bg-[#f7f5ee]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <BrandMark />
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-[13px] font-medium text-[#596b60] transition-colors hover:text-[#d16446]" data-testid={`nav-${link.href.slice(1)}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#how-it-works" className="hidden min-h-[42px] items-center gap-2 rounded-full bg-[#244f49] px-5 text-[13px] font-semibold text-[#fbf7ee] transition hover:bg-[#173f39] md:inline-flex" data-testid="nav-get-a-token">
            Get a Token <ArrowRight size={15} />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dedbd0] text-[#244f49] md:hidden"
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-[#e7e3d8] bg-[#f7f5ee] px-5 pb-5 pt-3 md:hidden">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="block border-b border-[#e9e5da] py-3.5 text-[14px] font-medium text-[#496058]" data-testid={`mobile-${link.href.slice(1)}`}>
                {link.label}
              </a>
            ))}
            <a href="#how-it-works" onClick={closeMenu} className="mt-4 flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#244f49] text-[13px] font-semibold text-[#fbf7ee]" data-testid="mobile-get-a-token">
              Get a Token <ArrowRight size={15} />
            </a>
          </nav>
        )}
      </header>

      <section className="relative isolate">
        <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px]" />
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:px-12 lg:pb-32 lg:pt-28">
          <div className="reveal-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dcded1] bg-[#fbfaf5]/75 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#547266]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d96e4c]" />
              Waiting can feel different
            </div>
            <h1 className="serif max-w-[690px] text-[clamp(3.35rem,7vw,6.35rem)] leading-[.98] tracking-[-.065em] text-[#214b44]" data-testid="text-hero-heading">
              Skip the Queue.
              <br />
              <span className="relative inline-block">Keep Your Time.<span className="absolute -bottom-1 left-1 h-[5px] w-[78%] -rotate-[1.5deg] rounded-full bg-[#df9a6e]/75" /></span>
            </h1>
            <p className="mt-7 max-w-[510px] text-[17px] leading-[1.7] text-[#64746a] sm:text-[19px]" data-testid="text-hero-subheading">
              Get a digital token and arrive when it's almost your turn.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ArrowLink href="#how-it-works">Get a Token</ArrowLink>
              <ArrowLink href="#organizations" dark>For Organizations</ArrowLink>
            </div>
            <p className="mt-4 max-w-[420px] text-[11px] leading-5 text-[#86897e]">
              QueueLess is introducing a more thoughtful way to wait. Token access is not available in this preview.
            </p>
            <div className="mt-10 flex items-center gap-3 text-[12px] text-[#718075]">
              <span className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-[#f7f5ee] bg-[#d9c89f]" />
                <span className="h-7 w-7 rounded-full border-2 border-[#f7f5ee] bg-[#a8b8a1]" />
                <span className="h-7 w-7 rounded-full border-2 border-[#f7f5ee] bg-[#dfab91]" />
              </span>
              Built for the people on both sides of the counter
            </div>
          </div>
          <div className="reveal-up reveal-delay-1 lg:pl-2">
            <TicketIllustration />
          </div>
        </div>
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 border-y border-[#dfddd1] py-6 md:grid-cols-4 md:py-7">
            {[
              ['01', 'Know where you stand'],
              ['02', 'Wait on your terms'],
              ['03', 'Arrive at the right time'],
              ['04', 'Serve people with care'],
            ].map(([number, text]) => (
              <div key={number} className="flex items-center gap-3 py-2 md:justify-center">
                <span className="serif text-[18px] italic text-[#d16b4c]">{number}</span>
                <span className="max-w-[125px] text-[11px] leading-4 text-[#68786d]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-[#c96749]">A clearer kind of waiting</p>
              <h2 className="serif max-w-[470px] text-[clamp(2.55rem,5vw,4.3rem)] leading-[1.04] tracking-[-.055em] text-[#214b44]">Your place in line, without being stuck in one.</h2>
              <p className="mt-6 max-w-[420px] text-[15px] leading-7 text-[#68776d]">QueueLess is designed to give people a simple sense of what comes next, while giving service teams a more considerate way to welcome them.</p>
            </div>
            <div className="grid gap-0">
              {[
                { n: '01', icon: Smartphone, title: 'Take your place digitally', copy: 'A person joins a participating service queue and receives a digital token instead of waiting in a physical line.' },
                { n: '02', icon: Clock3, title: 'Keep an eye on the moment', copy: 'Clear updates help people understand when their turn is getting closer, so they can use the time in between.' },
                { n: '03', icon: MapPin, title: 'Arrive when it matters', copy: 'When their place is approaching, they can make their way back ready to be served.' },
              ].map(({ n, icon: Icon, title, copy }) => (
                <article key={n} className="group flex gap-5 border-t border-[#dfddd1] py-6 sm:gap-7 sm:py-7" data-testid={`card-step-${n}`}>
                  <span className="serif mt-1 text-[16px] italic text-[#c87357]">{n}</span>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-[#e7ece2] text-[#3d6959] transition-transform group-hover:-rotate-3">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-[-.02em] text-[#2e4f47]">{title}</h3>
                    <p className="mt-2 max-w-[470px] text-[13px] leading-6 text-[#748077]">{copy}</p>
                  </div>
                </article>
              ))}
              <div className="mt-1 rounded-2xl border border-[#e3dfd2] bg-[#fbfaf5] p-4 text-[12px] leading-5 text-[#757c70]">
                This is the intended QueueLess experience. Digital tokens and live queue updates are not available in this Phase 1 preview.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="for-people" className="scroll-mt-24 bg-[#e9ede3] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-12">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-6 -top-7 h-28 w-28 rounded-full border border-[#bfcaba]" />
            <div className="relative rounded-[30px] bg-[#27564f] p-7 text-[#f7f4e9] sm:p-10">
              <div className="flex items-center justify-between border-b border-white/20 pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#b7cabc]">A little more time</p>
                  <p className="serif mt-2 text-[34px] tracking-[-.04em]">For your actual day.</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#edbd8d]"><HeartHandshake size={21} /></div>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  ['More freedom', 'Step outside the waiting room and get on with your day.'],
                  ['Less uncertainty', 'Understand what to expect instead of guessing.'],
                  ['A more human visit', 'Feel considered before you even reach the counter.'],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-3">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#e7b17e]" />
                    <div>
                      <p className="text-[13px] font-semibold">{title}</p>
                      <p className="mt-1 text-[12px] leading-5 text-[#d0ddd2]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 border-t border-white/20 pt-5 text-[11px] text-[#c6d3c7]">
                <ShieldCheck size={15} className="text-[#e7b17e]" />
                Clear, respectful, built around your time
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-[#c96749]">For people</p>
            <h2 className="serif max-w-[520px] text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.03] tracking-[-.055em] text-[#214b44]">Your time belongs to you.</h2>
            <p className="mt-6 max-w-[465px] text-[15px] leading-7 text-[#68776d]">A queue is part of getting somewhere, not the whole day. QueueLess gives people a way to wait with more choice, better context, and less worry.</p>
            <a href="#how-it-works" className="group mt-8 inline-flex items-center gap-3 border-b border-[#bfc9ba] pb-2 text-[13px] font-semibold text-[#31584e] hover:text-[#c96749]" data-testid="link-see-how-it-works">
              See how it works <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section id="organizations" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid gap-7 md:grid-cols-[1fr_.72fr] md:items-end">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-[#c96749]">For organizations</p>
              <h2 className="serif max-w-[610px] text-[clamp(2.55rem,5vw,4.4rem)] leading-[1.04] tracking-[-.055em] text-[#214b44]">A better first impression starts before the counter.</h2>
            </div>
            <p className="max-w-[400px] text-[14px] leading-7 text-[#68776d]">Give people a clearer experience from the moment they join a queue, and give your team the space to focus on the service itself.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Users, eyebrow: 'More considered visits', title: 'Welcome people on their terms.', copy: 'A digital place in line can help reduce crowding and make the wait feel less confining.' },
              { icon: MessageSquare, eyebrow: 'Clearer expectations', title: 'Keep the next step visible.', copy: 'Simple, timely information helps people know what to expect and when to return.' },
              { icon: Building2, eyebrow: 'People-first service', title: 'Make room for the human part.', copy: 'When waiting feels more orderly, teams can spend more attention on the person in front of them.' },
            ].map(({ icon: Icon, eyebrow, title, copy }, index) => (
              <article key={eyebrow} className={`rounded-[24px] border border-[#e1ded3] p-6 sm:p-7 ${index === 1 ? 'bg-[#f0eee4]' : 'bg-[#fbfaf5]'}`} data-testid={`card-organization-${index + 1}`}>
                <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#e6ebe1] text-[#42695b]"><Icon size={20} strokeWidth={1.7} /></div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#be6a4f]">{eyebrow}</p>
                <h3 className="serif mt-3 max-w-[270px] text-[26px] leading-[1.12] tracking-[-.04em] text-[#294c45]">{title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-[#727d72]">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-col justify-between gap-5 rounded-[22px] bg-[#dce4d8] px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f4ed] text-[#c66c4f]"><Building2 size={18} /></span>
              <div>
                <p className="text-[14px] font-semibold text-[#2d5148]">Interested in a more thoughtful queue?</p>
                <p className="mt-1 text-[12px] text-[#68786e]">QueueLess is being developed for organizations that serve people in person.</p>
              </div>
            </div>
            <a href="#how-it-works" className="group inline-flex min-h-[43px] shrink-0 items-center gap-2 rounded-full border border-[#aebcae] px-5 text-[12px] font-semibold text-[#31584e] transition hover:bg-[#f6f4ed]" data-testid="link-organization-enquiry">
              Explore the approach <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f0eee4] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[.2em] text-[#c96749]">Our point of view</p>
              <h2 className="serif text-[clamp(2.5rem,4vw,3.8rem)] leading-[1.04] tracking-[-.05em] text-[#214b44]">Every minute has a person in it.</h2>
            </div>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {[
                ['Respect is practical', 'People deserve useful information and a little agency, especially when the day is already full.'],
                ['Clarity builds trust', 'A clear next step can turn an uncertain wait into something people can plan around.'],
                ['Service is a partnership', 'Better queue experiences work for the visitor and the team making the service happen.'],
                ['Technology should step back', 'The best tools make the real-world interaction feel easier, not more complicated.'],
              ].map(([title, copy]) => (
                <div key={title} className="border-t border-[#d9d7cb] pt-4">
                  <h3 className="text-[14px] font-semibold text-[#34584e]">{title}</h3>
                  <p className="mt-2 text-[12px] leading-6 text-[#737b70]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-[#244f49] px-7 py-12 text-center text-[#fbf7ee] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-14 h-80 w-80 rounded-full border border-white/10" />
          <p className="relative text-[11px] font-bold uppercase tracking-[.2em] text-[#cbd9c9]">Make waiting a little kinder</p>
          <h2 className="serif relative mx-auto mt-5 max-w-[720px] text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1.02] tracking-[-.055em]">The line can move. So can you.</h2>
          <p className="relative mx-auto mt-5 max-w-[470px] text-[14px] leading-6 text-[#d1ddd1]">Explore the idea behind QueueLess, or start a conversation about bringing a better queue experience to your organization.</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#how-it-works" className="inline-flex min-h-[49px] items-center justify-center gap-2 rounded-full bg-[#f3e9d8] px-6 text-[13px] font-semibold text-[#244f49] transition hover:bg-white" data-testid="link-closing-token">Get a Token <ArrowRight size={15} /></a>
            <a href="#organizations" className="inline-flex min-h-[49px] items-center justify-center gap-2 rounded-full border border-white/35 px-6 text-[13px] font-semibold text-[#fbf7ee] transition hover:bg-white/10" data-testid="link-closing-organizations">For Organizations <ArrowRight size={15} /></a>
          </div>
          <p className="relative mt-4 text-[11px] text-[#becfc1]">Token services are not yet available in this preview.</p>
        </div>
      </section>

      <footer className="border-t border-[#e0ddd2]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <BrandMark />
          <p className="text-[11px] text-[#81857a]">A more considerate way to wait. QueueLess Phase 1 preview.</p>
          <a href="#organizations" className="text-[12px] font-medium text-[#426256] transition hover:text-[#c96749]" data-testid="link-contact">For Organizations</a>
        </div>
      </footer>
    </main>
  );
}

export default Home;

'use client';

const steps = [
  { id: '01', title: 'Research', desc: 'Understanding requirements' },
  { id: '02', title: 'Planning', desc: 'Strategy & wireframes' },
  { id: '03', title: 'Development', desc: 'Building the product' },
  { id: '04', title: 'Launch', desc: 'Deploy & optimize' },
];

export default function WorkProcessSticky() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-4xl font-bold mb-20 text-center">
          Work Process
        </h2>

        <div className="relative">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="sticky"
              style={{ top: `${i * 20}px`, zIndex: 10 + i }}
            >
              <div className="mb-10 p-8 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
                <h3 className="text-2xl font-semibold mb-2">
                  {step.id} — {step.title}
                </h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
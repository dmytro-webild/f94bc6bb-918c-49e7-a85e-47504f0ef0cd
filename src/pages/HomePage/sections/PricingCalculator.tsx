import { useState } from 'react';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Switch from '@/components/ui/Switch';

export default function PricingCalculatorSection() {
  const [guests, setGuests] = useState(2);
  const [course, setCourse] = useState('standard');
  const [winePairing, setWinePairing] = useState(false);
  const [privateRoom, setPrivateRoom] = useState(false);

  const courses = [
    { id: 'standard', name: 'Nordic Standard', price: 1500 },
    { id: 'premium', name: 'Premium Experience', price: 2800 },
    { id: 'chef', name: "Chef's Table", price: 4500 }
  ];

  const selectedCourse = courses.find(c => c.id === course) || courses[0];
  const total = (selectedCourse.price * guests) + (winePairing ? 1200 * guests : 0) + (privateRoom ? 2000 : 0);

  return (
    <section className="relative w-full py-24 bg-[#111111] text-zinc-100" data-webild-section="pricing-calculator" id="pricing-calculator">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="fade">
          <div className="text-center mb-16">
            <TextAnimation
              text="Experience Calculator"
              variant="fade-blur"
              tag="h2"
              className="text-4xl md:text-5xl font-bold text-[#C19A6B] mb-4"
              gradientText={false}
            />
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Plan your perfect dining experience. Estimate the cost of your visit with our interactive calculator.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <ScrollReveal variant="fade" delay={0.1} className="lg:col-span-2 space-y-8 bg-[#1A1A1A] p-6 md:p-8 rounded-2xl border border-[#2A2A2A]">
            {/* Guests */}
            <div>
              <Label className="text-zinc-300 mb-3 block text-lg">Number of Guests</Label>
              <Input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                className="bg-[#222222] border-[#333333] text-zinc-100 text-lg py-6 w-full md:w-1/2 focus:border-[#C19A6B]"
              />
            </div>

            {/* Course Selection */}
            <div>
              <Label className="text-zinc-300 mb-4 block text-lg">Select Course</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setCourse(c.id)}
                    className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                      course === c.id
                        ? 'border-[#C19A6B] bg-[#8B5A2B]/20'
                        : 'border-[#333333] bg-[#222222] hover:border-[#555555]'
                    }`}
                  >
                    <div className="font-semibold text-zinc-100 text-lg">{c.name}</div>
                    <div className="text-[#C19A6B] mt-2">฿{c.price.toLocaleString()} / pax</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <Label className="text-zinc-300 mb-4 block text-lg">Enhancements</Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 rounded-xl bg-[#222222] border border-[#333333]">
                  <div>
                    <div className="font-semibold text-zinc-100 text-lg">Wine Pairing</div>
                    <div className="text-zinc-400 mt-1">Expertly curated wines for each course (฿1,200 / pax)</div>
                  </div>
                  <Switch checked={winePairing} onChange={setWinePairing} />
                </div>
                <div className="flex items-center justify-between p-5 rounded-xl bg-[#222222] border border-[#333333]">
                  <div>
                    <div className="font-semibold text-zinc-100 text-lg">Private Dining Room</div>
                    <div className="text-zinc-400 mt-1">Exclusive space for your party (Flat ฿2,000)</div>
                  </div>
                  <Switch checked={privateRoom} onChange={setPrivateRoom} />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Summary */}
          <ScrollReveal variant="fade" delay={0.2}>
            <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-2xl border border-[#8B5A2B]/40 flex flex-col h-full relative overflow-hidden shadow-[0_0_30px_rgba(139,90,43,0.1)]">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B5A2B] to-[#C19A6B]"></div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-8">Estimated Total</h3>

              <div className="space-y-5 flex-grow">
                <div className="flex justify-between text-zinc-300 text-lg">
                  <span>{selectedCourse.name} (x{guests})</span>
                  <span>฿{(selectedCourse.price * guests).toLocaleString()}</span>
                </div>
                {winePairing && (
                  <div className="flex justify-between text-zinc-300 text-lg">
                    <span>Wine Pairing (x{guests})</span>
                    <span>฿{(1200 * guests).toLocaleString()}</span>
                  </div>
                )}
                {privateRoom && (
                  <div className="flex justify-between text-zinc-300 text-lg">
                    <span>Private Room</span>
                    <span>฿2,000</span>
                  </div>
                )}
                <div className="pt-6 border-t border-[#333333] mt-6">
                  <div className="flex justify-between text-2xl font-bold text-[#C19A6B]">
                    <span>Total</span>
                    <span>฿{total.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-zinc-500 mt-4 text-right">
                    *Prices are subject to 10% service charge and 7% VAT
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  text="Reserve Now"
                  variant="primary"
                  className="w-full py-6 text-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
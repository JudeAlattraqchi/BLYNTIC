import React, { useEffect } from 'react';
import { Reveal } from './ui/Reveal';
import Cal, { getCalApi } from "@calcom/embed-react";

const TalkToSales: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section className="bg-white pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6">
                Talk to <span className="text-blue-600">Sales</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600">
                Book a time with our team to discuss how BLYNTIC can help automate your workflow.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} width="100%">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-1 md:p-2 overflow-hidden relative" style={{ height: '750px' }}>
              <Cal 
                namespace="30min"
                calLink="jude-atraqchi-jtufcc/30min"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{layout: 'month_view', "useSlotsViewOnSmallScreen": "true"}}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TalkToSales;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DINAGUI SARL - Maintenance en cours",
  description: "Notre site est en cours de maintenance. Nous serons bientôt de retour.",
};

export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#1f2d3d] to-[#2a3f55] px-6">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-[#F88732]/20 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-[#F88732]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Logo text */}
        <h1 className="text-3xl font-bold text-white mb-2 font-[family-name:var(--font-roboto-condensed)]">
          DINAGUI <span className="text-[#F88732]">SARL</span>
        </h1>

        <div className="w-16 h-1 bg-[#F88732] mx-auto my-6 rounded-full" />

        <h2 className="text-xl text-white/90 mb-4 font-light">
          Site en maintenance
        </h2>

        <p className="text-white/60 mb-8 leading-relaxed">
          Nous effectuons actuellement des améliorations pour vous offrir une
          meilleure expérience. Nous serons de retour très bientôt.
        </p>

        {/* Contact info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left space-y-3">
          <p className="text-white/80 text-sm font-medium mb-3">
            En attendant, vous pouvez nous contacter :
          </p>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <svg className="w-4 h-4 text-[#F88732] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(+224) 613 50 04 04</span>
          </div>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <svg className="w-4 h-4 text-[#F88732] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>contact@dinagui.com</span>
          </div>
        </div>

        <p className="text-white/30 text-xs mt-8">
          &copy; {new Date().getFullYear()} DINAGUI SARL — Un choix sûr et durable
        </p>
      </div>
    </div>
  );
}

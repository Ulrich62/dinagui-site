"use client";

import React, { useState, useRef } from "react";
import { FiCopy, FiCheck, FiCode } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export default function SignatureGenerator() {
  const [name, setName] = useState("Diamilatou Sow");
  const [role, setRole] = useState("Directrice Administrative/RH");
  const [phone, setPhone] = useState("+224 628 19 03 15");
  const [email, setEmail] = useState("diamilatousow898@gmail.com");

  const [copiedRich, setCopiedRich] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  
  const signatureRef = useRef<HTMLDivElement>(null);

  const getSignatureHtml = () => {
    return `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #333333; max-width: 600px; background-color: #ffffff;">
  <tr>
    <td valign="middle" style="padding-right: 25px; border-right: 2px solid #F88732; width: 140px; text-align: center;">
      <a href="https://plazaplatinium.com" target="_blank" style="text-decoration: none;">
        <img src="https://dinagui-site.vercel.app/images/logo-dinagui.avif" alt="Plaza Platinium / Dinagui" width="130" style="display: block; border: none; max-width: 130px;" />
      </a>
    </td>
    <td valign="middle" style="padding-left: 25px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          <td style="padding-bottom: 2px;">
            <strong style="font-size: 20px; color: #1f2d3d; font-family: Arial, Helvetica, sans-serif; letter-spacing: 0.5px;">${name}</strong>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 15px;">
            <span style="font-size: 15px; color: #F88732; font-weight: bold; font-family: Arial, Helvetica, sans-serif;">${role}</span>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 6px;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="middle" style="padding-right: 10px; font-size: 16px;">📞</td>
                <td valign="middle" style="font-size: 13px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">
                  <a href="tel:${phone.replace(/\s+/g, "")}" style="color: #6b7280; text-decoration: none;">${phone}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 6px;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="middle" style="padding-right: 10px; font-size: 16px;">📧</td>
                <td valign="middle" style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">
                  <a href="mailto:${email}" style="color: #6b7280; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 6px;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="top" style="padding-right: 10px; font-size: 16px;">📍</td>
                <td valign="middle" style="font-size: 13px; color: #6b7280; font-family: Arial, Helvetica, sans-serif; line-height: 1.4;">
                  Siège social : Kipé, Centre Émetteur<br>
                  B.P. 001 Conakry – République de Guinée
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 0;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="middle" style="padding-right: 10px; font-size: 16px;">🌐</td>
                <td valign="middle" style="font-size: 13px; font-family: Arial, Helvetica, sans-serif;">
                  <a href="https://plazaplatinium.com" style="color: #F88732; text-decoration: none; font-weight: bold;">https://plazaplatinium.com</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
    `.trim();
  };

  const copyRichText = async () => {
    try {
      if (signatureRef.current) {
        const html = getSignatureHtml();
        
        // Try the modern Clipboard API for rich text
        if (navigator.clipboard && window.ClipboardItem) {
          const type = "text/html";
          const blob = new Blob([html], { type });
          const data = [new ClipboardItem({ [type]: blob })];
          await navigator.clipboard.write(data);
        } else {
          // Fallback for older browsers
          const range = document.createRange();
          range.selectNode(signatureRef.current);
          window.getSelection()?.removeAllRanges();
          window.getSelection()?.addRange(range);
          document.execCommand("copy");
          window.getSelection()?.removeAllRanges();
        }
        
        setCopiedRich(true);
        setTimeout(() => setCopiedRich(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Erreur lors de la copie. Essayez de sélectionner et copier manuellement.");
    }
  };

  const copyHtmlCode = async () => {
    try {
      const html = getSignatureHtml();
      await navigator.clipboard.writeText(html);
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 2000);
    } catch (err) {
      console.error("Failed to copy HTML:", err);
    }
  };

  return (
    <>
      <PageHero title="Générateur de signature Outlook" />
      
      <section className="py-20 bg-[#faf5f0] min-h-screen">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] divide-y md:divide-y-0 md:divide-x divide-gray-100">
              
              {/* Formulaire */}
              <div className="p-8 bg-gray-50/50">
                <h2 className="text-xl font-bold text-[#1f2d3d] mb-6 font-[Roboto_Condensed] uppercase">
                  Informations
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-[Roboto]">
                      Nom et Prénom
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F88732] focus:border-[#F88732] outline-none transition-all font-[Roboto] text-[#1f2d3d]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-[Roboto]">
                      Fonction
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F88732] focus:border-[#F88732] outline-none transition-all font-[Roboto] text-[#1f2d3d]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-[Roboto]">
                      Téléphone
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F88732] focus:border-[#F88732] outline-none transition-all font-[Roboto] text-[#1f2d3d]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-[Roboto]">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F88732] focus:border-[#F88732] outline-none transition-all font-[Roboto] text-[#1f2d3d]"
                    />
                  </div>
                </div>
              </div>

              {/* Aperçu */}
              <div className="p-8">
                <h2 className="text-xl font-bold text-[#1f2d3d] mb-6 font-[Roboto_Condensed] uppercase">
                  Aperçu de la signature
                </h2>
                
                <div className="bg-white p-8 rounded-lg border border-gray-200 overflow-x-auto min-h-[250px] flex items-center justify-center">
                  <div 
                    ref={signatureRef}
                    dangerouslySetInnerHTML={{ __html: getSignatureHtml() }}
                  />
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={copyRichText}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#F88732] hover:bg-[#e0752a] text-white font-semibold px-6 py-3 rounded transition-all duration-300 font-[Roboto] shadow-sm hover:shadow-md"
                  >
                    {copiedRich ? <FiCheck className="text-xl" /> : <FiCopy className="text-xl" />}
                    {copiedRich ? "Copié !" : "Copier la signature"}
                  </button>
                  
                  <button
                    onClick={copyHtmlCode}
                    className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-semibold px-6 py-3 rounded transition-all duration-300 font-[Roboto] shadow-sm"
                  >
                    {copiedHtml ? <FiCheck className="text-xl" /> : <FiCode className="text-xl" />}
                    {copiedHtml ? "Code HTML copié !" : "Copier le code HTML"}
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4 text-center font-[Roboto]">
                  <strong>Astuce Outlook :</strong> Cliquez sur "Copier la signature" et faites simplement un Ctrl+V (Coller) dans l'éditeur de signature d'Outlook.
                </p>
              </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-[#1f2d3d] mb-6 font-[Roboto_Condensed] uppercase border-b border-gray-100 pb-4">
              Comment ajouter cette signature dans Outlook ?
            </h2>
            <div className="space-y-6 text-[#6b7280] font-[Roboto]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F88732]/10 text-[#F88732] flex items-center justify-center font-bold">1</div>
                <p className="mt-1">Remplissez le formulaire avec les informations du collaborateur.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F88732]/10 text-[#F88732] flex items-center justify-center font-bold">2</div>
                <p className="mt-1">Cliquez sur le bouton orange <strong className="text-[#1f2d3d]">"Copier la signature"</strong>.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F88732]/10 text-[#F88732] flex items-center justify-center font-bold">3</div>
                <div className="mt-1">
                  <p className="mb-2">Ouvrez Outlook et allez dans les paramètres de signature :</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm bg-gray-50 p-4 rounded-md">
                    <li>Sur la nouvelle version (Windows/Web) : <strong className="text-[#1f2d3d]">Paramètres ⚙️ &gt; Comptes &gt; Signatures</strong></li>
                    <li>Sur l'ancienne version : <strong className="text-[#1f2d3d]">Fichier &gt; Options &gt; Courrier &gt; Signatures</strong></li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F88732]/10 text-[#F88732] flex items-center justify-center font-bold">4</div>
                <p className="mt-1">Créez une <strong className="text-[#1f2d3d]">Nouvelle signature</strong>, donnez-lui un nom, puis cliquez dans la zone de texte vide et faites <strong className="text-[#1f2d3d]">Coller (Ctrl+V ou Cmd+V)</strong>.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F88732]/10 text-[#F88732] flex items-center justify-center font-bold">5</div>
                <p className="mt-1">N'oubliez pas de définir cette signature par défaut pour les "Nouveaux messages" et "Réponses/Transferts" avant de cliquer sur <strong className="text-[#1f2d3d]">Enregistrer</strong>.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

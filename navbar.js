/**
 * WebMinds — Navbar Component
 * Inclui este ficheiro em qualquer página HTML e a navbar é injetada automaticamente.
 *
 * Uso:
 *   <script src="navbar.js"></script>   ← coloca no <head> ou antes do </body>
 *
 * A navbar deteta automaticamente qual a página ativa com base em window.location.pathname.
 */

(function () {
  function init() {
    // ─── HTML da Navbar ────────────────────────────────────────────────────────
    const navbarHTML = `


    <!-- Scroll Progress Bar -->
    <div id="scrollProgressBar" class="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-sky-500 z-[60] transform scale-x-0 origin-left pointer-events-none"></div>

    <!-- Main navbar -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">

        <!-- Logo -->
        
        <a href="index.html" class="flex items-center gap-2.5 shrink-0">
          <img src="assets/wbPreta.png" alt="WebMinds" width="100px" height="100px">
        </a>

        <!-- Desktop nav -->
        <ul class="hidden md:flex items-center gap-1">
        

          <!-- Alojamento -->
          <li class="nav-item group relative">
            <button class="nav-link flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              Alojamento
              <svg class="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 opacity-0 pointer-events-none translate-y-[-6px] transition-all duration-200 z-50 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div class="dropdown-arrow absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 rounded-sm"></div>
              <div class="p-4 grid grid-cols-2 gap-1">
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2.5 py-1 mb-1">Alojamento</p>
                  <a href="alojamento-cpanel.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Alojamento cPanel SSD</strong><span class="text-xs text-slate-500">Alojamento Partilhado de Alta Qualidade</span></span>
                  </a>
                  <a href="alojamento-wordpress.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Alojamento WordPress</strong><span class="text-xs text-slate-500">Uma forma rápida, fiável e segura de potenciar o teu website WordPress.</span></span>
                  </a>
                  <a href="email-empresarial.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">E-mail Empresarial</strong><span class="text-xs text-slate-500">E-mail profissional e sem preocupações.</span></span>
                  </a>
                </div>
                <div>
                  <br>
                  <a href="revenda-cpanel.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Revenda Linux cPanel</strong><span class="text-xs text-slate-500">Crie o seu negócio na nossa infraestrutura.</span></span>
                  </a>
                </div>
              </div>
            </div>
          </li>

          <!-- Servidores -->
          <li class="nav-item group relative">
            <button class="nav-link flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              Servidores
              <svg class="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 opacity-0 pointer-events-none translate-y-[-6px] transition-all duration-200 z-50 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div class="dropdown-arrow absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 rounded-sm"></div>
              <div class="p-4 flex flex-col gap-1">
                <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2.5 py-1 mb-1">Servidores</p>
                <a href="vps-nvme.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                  </span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Servidores VPS</strong><span class="text-xs text-slate-500">Servidores VPS de Alto Desempenho</span></span>
                </a>
                <a href="dedicados.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                  </span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Servidores Dedicados</strong><span class="text-xs text-slate-500">Servidores Dedicados de Alto Desempenho</span></span>
                </a>
                <a href="servidores-jogos.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
                  </span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Servidores de Jogos</strong><span class="text-xs text-slate-500">Servidores de Jogos de Alto Desempenho</span></span>
                </a>
              </div>
            </div>
          </li>

          
          <li class="nav-item">
  <a href="dominios.html" class="nav-link flex items-center px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
    Domínios
  </a>
</li>

          <!-- Serviços -->
          <li class="nav-item group relative">
            <button class="nav-link flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              Serviços
              <svg class="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 opacity-0 pointer-events-none translate-y-[-6px] transition-all duration-200 z-50 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div class="dropdown-arrow absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 rounded-sm"></div>
              <div class="p-4 grid grid-cols-2 gap-1">
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2.5 py-1 mb-1">Serviços</p>
                  <a href="criacao-website.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Construimos o seu Website</strong><span class="text-xs text-slate-500">Nós pensamos. Desenhamos. Desenvolvemos. Lançamos.</span></span>
                  </a>
                  <a href="weebly.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Weebly</strong><span class="text-xs text-slate-500">Crie o seu site de forma simples e rápida com o Weebly.</span></span>
                  </a>
                  <a href="cloud.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M17 22v-4h-4"/><path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607"/><path d="M7 10v4h4"/><path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Cloud</strong><span class="text-xs text-slate-500">Tenha o seu e-mail e espaço na cloud com total segurança.</span></span>
                  </a>
                  <a href="seo.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="m17 8 5-5"/><path d="M17 3h5v5"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">SEO</strong><span class="text-xs text-slate-500">Melhora o Tráfego do Teu Site e Faz Crescer o Teu Negócio.</span></span>
                  </a>
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2.5 py-1 mb-1">Segurança</p>
                  <a href="sitelock.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">SiteLock</strong><span class="text-xs text-slate-500">Solução para o seu site e previne vulnerabilidades.</span></span>
                  </a>
                  <a href="monitorizacao.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Monitorização de Site e Servidor</strong><span class="text-xs text-slate-500">Monitorização de Site e Servidor</span></span>
                  </a>
                  <a href="nordvpn.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"/><path d="M2 12h8.5"/><path d="M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">NordVPN</strong><span class="text-xs text-slate-500">Garante a tua ligação e oculta o teu IP.</span></span>
                  </a>
                  <a href="backups.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <span class="w-9 h-9 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 5 2.69"/><path d="M21 9.3V5"/><path d="M3 5v14a9 3 0 0 0 6.47 2.88"/><path d="M12 12v4h4"/><path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/></svg>
                    </span>
                    <span><strong class="block text-sm font-semibold text-slate-800">Cópias de Segurança</strong><span class="text-xs text-slate-500">Proteja o seu site com backups diários.</span></span>
                  </a>
                </div>
              </div>
            </div>
          </li>

          <!-- Soluções -->
          <li class="nav-item group relative">
            <button class="nav-link flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              Soluções
              <svg class="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 opacity-0 pointer-events-none translate-y-[-6px] transition-all duration-200 z-50 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div class="dropdown-arrow absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 rounded-sm"></div>
              <div class="p-4 flex flex-col gap-1">
                <a href="https://breakprice.pt/" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
                  </span>
                  <span><strong class="block text-sm font-semibold text-slate-800">BreakPrice | Calculadora PME</strong></span>
                </a>
                <a href="https://elitebarbers.pt/" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
                  </span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Elite BarberShop</strong></span>
                </a>
                <a href="https://vissiona.pt/" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/></svg>
                  </span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Vissiona | Gestão de PME</strong></span>
                </a>
                <a href="https://timecut.pt/" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>
                  </span>
                  <span><strong class="block text-sm font-semibold text-slate-800">TimeCut | Picagem Minimalista</strong></span>
                </a>
              </div>
            </div>
          </li>

  

          <!-- Empresa -->
          <li class="nav-item group relative">
            <button class="nav-link flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
              Empresa
              <svg class="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/60 opacity-0 pointer-events-none translate-y-[-6px] transition-all duration-200 z-50 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div class="dropdown-arrow absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 rounded-sm"></div>
              <div class="p-3 flex flex-col gap-0.5">
                <a href="sobre-nos.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg></span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Sobre Nós</strong><span class="text-xs text-slate-500">A nossa história e equipa</span></span>
                </a>
                <a href="torne-se-afiliado.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg></span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Torne-se Afiliado</strong><span class="text-xs text-slate-500">Ganhe 15% de comissões indicando os nossos serviços</span></span>
                </a>
                <a href="parceiros.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Parceiros</strong><span class="text-xs text-slate-500">Juntos para criar valor e alcançar grandes resultados.</span></span>
                </a>
                <a href="trabalhe-connosco.html" class="dropdown-item flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <span class="w-9 h-9 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg></span>
                  <span><strong class="block text-sm font-semibold text-slate-800">Trabalhe Connosco</strong><span class="text-xs text-slate-500">Junta-te à nossa equipa</span></span>
                </a>
              </div>
            </div>
          </li>

          <li>
            <a href="login.html" class="ml-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-indigo-200 transition-all hover:-translate-y-px active:scale-[0.97]">
              Entrar
            </a>
          </li>
        </ul>
        

        <!-- Mobile hamburger -->
        <button id="hamburger" class="md:hidden flex flex-col gap-1.5 p-1.5 z-[60] relative" aria-label="Menu">
          <span class="ham-bar block w-6 h-0.5 bg-slate-700 rounded transition-all duration-300"></span>
          <span class="ham-bar block w-6 h-0.5 bg-slate-700 rounded transition-all duration-300"></span>
          <span class="ham-bar block w-6 h-0.5 bg-slate-700 rounded transition-all duration-300"></span>
        </button>
      </div>
          <!-- Announcement bar -->
    <div class="w-full bg-red-600 text-white text-xs font-semibold text-center py-2 px-4">
      🎉 Somos agora Parceiro Oficial <strong>Worten Life</strong> —
      <a href="#" class="underline hover:text-red-200 transition-colors">Saber mais</a>
    </div>

      <!-- Mobile menu -->
      <div id="mobileMenu" class="md:hidden fixed top-0 right-[-100%] h-screen w-4/5 max-w-xs bg-white shadow-2xl z-50 transition-all duration-300 overflow-y-auto pt-20 px-5 pb-8">
        <div class="flex flex-col gap-1">

          <!-- Alojamento -->
          <div class="mobile-accordion">
            <button class="mobile-acc-trigger w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
              Alojamento
              <svg class="acc-arrow w-4 h-4 opacity-60 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="mobile-acc-content hidden pl-3 border-l-2 border-slate-100 ml-3 flex flex-col gap-0.5 pb-1">
              <a href="alojamento-cpanel.html" class="mobile-close flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Alojamento Partilhado</a>
              <a href="alojamento-wordpress.html" class="mobile-close flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Alojamento WordPress</a>
              <a href="email-empresarial.html" class="mobile-close flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">E-mail Empresarial</a>
              <a href="revenda-cpanel.html" class="mobile-close flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Revenda Linux cPanel</a>
            </div>
          </div>

          <!-- Servidores -->
          <div class="mobile-accordion">
            <button class="mobile-acc-trigger w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
              Servidores
              <svg class="acc-arrow w-4 h-4 opacity-60 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="mobile-acc-content hidden pl-3 border-l-2 border-slate-100 ml-3 flex flex-col gap-0.5 pb-1">
              <a href="vps-nvme.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Servidor VPS NVMe</a>
              <a href="vps-ssd.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Servidor VPS SSD</a>
              <a href="dedicados.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Servidores Dedicados</a>
              <a href="servidores-jogos.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Servidores de Jogos</a>
            </div>
          </div>

          <!-- Serviços -->
          <div class="mobile-accordion">
            <button class="mobile-acc-trigger w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
              Serviços
              <svg class="acc-arrow w-4 h-4 opacity-60 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="mobile-acc-content hidden pl-3 border-l-2 border-slate-100 ml-3 flex flex-col gap-0.5 pb-1">
              <a href="criacao-website.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Construímos o seu Website</a>
              <a href="weebly.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Weebly</a>
              <a href="cloud.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Cloud</a>
              <a href="seo.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">SEO</a>
              <p class="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Segurança</p>
              <a href="sitelock.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">SiteLock</a>
              <a href="monitorizacao.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Monitorização</a>
              <a href="nordvpn.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">NordVPN</a>
              <a href="backups.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Cópias de Segurança</a>
            </div>
          </div>

          <!-- Soluções -->
          <div class="mobile-accordion">
            <button class="mobile-acc-trigger w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
              Soluções
              <svg class="acc-arrow w-4 h-4 opacity-60 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="mobile-acc-content hidden pl-3 border-l-2 border-slate-100 ml-3 flex flex-col gap-0.5 pb-1">
              <a href="https://breakprice.pt/" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">BreakPrice | Calculadora PME</a>
              <a href="https://elitebarbers.pt/" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Elite BarberShop</a>
              <a href="https://vissiona.pt/" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Vissiona | Gestão de PME</a>
              <a href="https://timecut.pt/" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">TimeCut | Picagem Minimalista</a>
            </div>
          </div>

          <!-- Empresa -->
          <div class="mobile-accordion">
            <button class="mobile-acc-trigger w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
              Empresa
              <svg class="acc-arrow w-4 h-4 opacity-60 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="mobile-acc-content hidden pl-3 border-l-2 border-slate-100 ml-3 flex flex-col gap-0.5 pb-1">
              <a href="sobre-nos.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Sobre Nós</a>
              <a href="torne-se-afiliado.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Torne-se Afiliado</a>
              <a href="parceiros.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Parceiros</a>
              <a href="trabalhe-connosco.html" class="mobile-close px-3 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Trabalhe Connosco</a>
            </div>
          </div>

          <!-- CTA -->
          <div class="pt-3 mt-2 border-t border-slate-100">
            <a href="login.html" class="mobile-close block w-full text-center py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">
              Começar Agora
            </a>
          </div>

        </div>
      </div>

      <!-- Overlay -->
      <div id="mobileOverlay" class="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 hidden"></div>
    </nav>
  `;

    // ─── Injeta o HTML no início do <body> ────────────────────────────────────
    const wrapper = document.createElement('div');
    wrapper.id = 'webminds-navbar';
    wrapper.innerHTML = navbarHTML;
    document.body.insertBefore(wrapper, document.body.firstChild);

    // ─── Adiciona padding-top ao body para compensar a navbar fixa ───────────
    // (ajusta conforme a altura da announcement bar + navbar)
    document.body.style.paddingTop = '0'; // A navbar é fixed, gere o teu pt-X no hero

    // ─── Navbar scroll behavior ───────────────────────────────────────────────
    const navbar = document.getElementById('navbar');

    function updateNavbar() {
      if (!navbar) return;
      if (window.scrollY > 20) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-slate-100');
      } else {
        navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-slate-100');
      }
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    // ─── Scroll progress bar ──────────────────────────────────────────────────
    const progressBar = document.getElementById('scrollProgressBar');

    if (progressBar) {
      window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        progressBar.style.transform = `scaleX(${progress})`;
      }, { passive: true });
    }

    // ─── Mobile menu ──────────────────────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const hamBars = document.querySelectorAll('.ham-bar');

    function openMenu() {
      mobileMenu.style.right = '0';
      mobileOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      hamBars[0].style.transform = 'translateY(8px) rotate(45deg)';
      hamBars[1].style.opacity = '0';
      hamBars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    }

    function closeMenu() {
      mobileMenu.style.right = '-100%';
      mobileOverlay.classList.add('hidden');
      document.body.style.overflow = '';
      hamBars[0].style.transform = '';
      hamBars[1].style.opacity = '';
      hamBars[2].style.transform = '';
    }

    if (hamburger) hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.style.right === '0px';
      isOpen ? closeMenu() : openMenu();
    });

    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

    // Mobile accordion
    document.querySelectorAll('.mobile-acc-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const arrow = trigger.querySelector('.acc-arrow');
        const isOpen = !content.classList.contains('hidden');

        // Fecha todos os outros
        document.querySelectorAll('.mobile-acc-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.acc-arrow').forEach(a => a.style.transform = '');

        if (!isOpen) {
          content.classList.remove('hidden');
          if (arrow) arrow.style.transform = 'rotate(180deg)';
        }
      });
    });

    // Fechar ao clicar num link do menu mobile
    document.querySelectorAll('.mobile-close').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // ─── Active link highlight ────────────────────────────────────────────────
    // Marca o item de menu ativo com base na URL atual
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#webminds-navbar a[href]').forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath && linkPath !== '#' && linkPath === currentPath) {
        link.classList.add('text-indigo-600');
      }
    });

  } // end init()

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
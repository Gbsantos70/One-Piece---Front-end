(function () {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const THRESHOLD_PX = 20; // tolerância antes do fim da página

    function checkFooterVisibility() {
        const doc = document.documentElement;
        const scrolledToBottom = (window.innerHeight + window.scrollY) >= (doc.scrollHeight - THRESHOLD_PX);
        const isScrollable = doc.scrollHeight > window.innerHeight + 1;

        // Se a página tiver rolagem, mostrar somente quando chegar ao fim.
        // Se NÃO houver rolagem (conteúdo curto), mostra o footer (opcional).
        if (isScrollable ? scrolledToBottom : true) {
            footer.classList.add('footer-visible');
        } else {
            footer.classList.remove('footer-visible');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility, { passive: true });
    window.addEventListener('resize', checkFooterVisibility);
    document.addEventListener('DOMContentLoaded', checkFooterVisibility);

    // chamada inicial
    checkFooterVisibility();
})();
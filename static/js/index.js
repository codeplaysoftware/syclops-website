$(() => {
    const cookies = $('#cookies-accept-dialog').CookiesAccepted();

    if(cookies.isEnabled()) {
        // Google Analytics
        const gaToken = $('body').data('ga');
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', gaToken);
        $.getScript('https://www.googletagmanager.com/gtag/js?id=' + gaToken);
    }
});

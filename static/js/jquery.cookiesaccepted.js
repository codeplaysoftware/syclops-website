(function ($) {
    /**
     * Plugin to allow a user to enable or disable cookies, easily.
     * @returns {jQuery.CookiesAccepted}
     * @constructor
     */
    $.fn.CookiesAccepted = function () {
        const container = $(this);
        const cookieExpiryInDays = 365;
        const cookieName = 'cookies-accepted';

        /**
         * Set a cookie.
         * @param key
         * @param value
         */
        function setCookie(key, value) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (cookieExpiryInDays * 24 * 60 * 60 * 1000));

            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';path=/'
                + ';Secure;SameSite=Strict;';
        }

        /**
         * Get a cookie.
         * @param key
         * @returns {string|null}
         */
        function getCookie(key) {
            const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        }

        /**
         * Initialize the cookie accepted plugin.
         */
        function init() {
            $(() => {
                if (getCookie(cookieName) === null) {
                    container.show();
                }

                container.find('button.accept').click(function() {
                    setCookie(cookieName, 'true', cookieExpiryInDays);
                    container.hide();
                });

                container.find('button.reject').click(function() {
                    setCookie(cookieName, 'false', cookieExpiryInDays);
                    container.hide();
                });

                $('body').find('.cookies-accepted-change').click(function() {
                    container.show();
                });
            });
        }

        /**
         * Returns true if the user has chosen to enable cookies. If the cookie is not set or is false, will return
         * false.
         * @returns {boolean}
         */
        this.isEnabled = function() {
          return getCookie(cookieName) === 'true';
        }

        /**
         * Show the poup.
         */
        this.show = function() {
            alert();
        }

        init();
        return this;
    }
})(jQuery);

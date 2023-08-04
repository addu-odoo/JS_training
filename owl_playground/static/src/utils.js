/** @odoo-module **/

import { onMounted, useRef } from "@odoo/owl";

export function useAutofocus(name) {
    const ref = useRef(name);
    onMounted(function() {
        if (ref.el) {
            ref.el.focus();
        }
    });
}
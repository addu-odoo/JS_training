/** @odoo-module */

import { Component } from "@odoo/owl";
export class Card extends Component {
	static template = "owl_playground.Card";
}

Card.pops = {
    slots: {
        type: Object,
        shape: {
            title: { typr: Object, optional: true},
            default: Object,
        },
    },
};
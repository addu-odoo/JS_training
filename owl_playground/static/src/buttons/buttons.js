/** @odoo-module **/

import { Scoreboard } from "../scoreboard/scoreboard";
import { Result } from "../result/result";
import { Component, useState } from "@odoo/owl";

export class Buttons extends Component {


    setup () {
        this.user_score = useState({ value: 0 });
        this.pc_score = useState({ value: 0 });
        this.list = useState(['ROCK', 'PAPER', 'SCISSIOR']);
        this.vl = useState({ value: "Let's start the game" });
        this.result = useState({ value: 'Play Now' });
    }

    rock () {
        const randomValue = this.list[Math.floor(Math.random() *this.list.length)];
        this.vl.value = randomValue;
        if (randomValue === 'PAPER') {
            this.pc_score.value++;
            this.result.value = 'YOU LOSE!!';
        }
        else if (randomValue === 'SCISSIOR') {
            this.user_score.value++;
            this.result.value = 'YOU WON!!';
        }
        else {
            this.result.value = 'DRAW';
        }
        
    }

    paper () {
        const randomValue = this.list[Math.floor(Math.random() *this.list.length)];
        this.vl.value = randomValue;
        if (randomValue === 'SCISSIOR') {
            this.pc_score.value++;
            this.result.value = 'YOU LOSE!!';
        }
        else if (randomValue === 'ROCK') {
            this.user_score.value++;
            this.result.value = 'YOU WON!!';
        }
        else {
            this.result.value = 'DRAW';
        }
        
    }

    scissior () {
        const randomValue = this.list[Math.floor(Math.random() *this.list.length)];
        this.vl.value = randomValue;
        if (randomValue === 'ROCK') {
            this.pc_score.value++;
            this.result.value = 'YOU LOSE!!';
        }
        else if (randomValue === 'PAPER') {
            this.user_score.value++;
            this.result.value = 'YOU WON!!';
        }
        else {
            this.result.value = 'DRAW';
        }
        
    }

    static template = "owl_playground.buttons";
    static components = { Scoreboard, Result };
}

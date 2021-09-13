/*
 * @Descripttion: canvas辅助函数便于项目开发
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-06 16:36:01
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-08 10:23:58
 */
import Vue from "vue";
import { lineOptions, textOptions, circleOptions } from '@/store/defOpt'

/** helpers */
function isUndefined(v) {
    return v === undefined
}

function isPlainObject(obj) {
    return Object.toString.call(obj) === '[object Object]'
}

function compile(v) {
    if(Array.isArray(v)) {
        if(v.length === 4) {
            return {
                x: v[0],
                y: v[1],
                x1: v[2],
                y1: v[3]
            }
        }
        return {
            x: v[0], y: v[1]
        }
    } else if (isPlainObject(v)) {
        return v
    } else {
        throw new Error('argments type must be array or object')
    }
}

function initError() {
    if(isUndefined(Vue.prototype.$ctx)) throw new Error('please init first!')
}

/** @type {HTMLCanvasElement} */
/**
 * @function $canvasInit 初始化canvas“画笔”
 * @function $strokeLine 画一条直线
 */

/** @type {HTMLCanvasElement} */
export const $canvasInit = Vue.prototype.$canvasInit = (id, width = window.innerWidth, height = window.innerHeight) => {
    if(isUndefined(id)) throw new Error('id is required!')
    const scopeCanvas = document.getElementById(id)
    scopeCanvas.width = width
    scopeCanvas.height = height
    Vue.prototype.$ctx = scopeCanvas.getContext('2d')
    return Vue.prototype
}
export const $drawLine = Vue.prototype.$drawLine = (startPoint, endPoint, options) => {
    initError()
    const ctx = Vue.prototype.$ctx
    options = Object.assign(lineOptions, options)
    const { color, lineWidth, lineCap, continuity } = options
    if(!continuity) {
        ctx.beginPath()
    }
    startPoint = compile(startPoint)
    endPoint = compile(endPoint)
    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(endPoint.x, endPoint.y)
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.lineCap = lineCap
    ctx.stroke()
    return Vue.prototype
}
export const $drawText = Vue.prototype.$drawText = (type = 'stroke', options) => {
    initError()
    const ctx = Vue.prototype.$ctx
    options = Object.assign(textOptions, options)
    let { fontStyle, textAlign, lineHeight, color, x, y, text, fontSize } = options
    ctx.beginPath()
    if(typeof fontSize === 'number') fontSize = fontSize + 'px'
    ctx.font = fontSize + ' ' + fontStyle
    ctx.textAlign = textAlign
    ctx.textBaseline = lineHeight
    if(type === 'stroke') {
        ctx.strokeStyle = color
        ctx.strokeText(text, x, y)
    } else {
        ctx.fillStyle = color
        ctx.fillText(text, x, y)
    }
    return Vue.prototype
}
export const $drawCircle = Vue.prototype.$drawCircle = (type = 'stroke', options) => {
    initError()
    const ctx = Vue.prototype.$ctx
    options = Object.assign(circleOptions, options)
    const { x, y, radius, start, end, anticlockwise, color } = options
    ctx.beginPath()
    const deg = Math.PI * 2 / 360
    ctx.arc(x, y, radius, start * deg - Math.PI/2, end * deg - Math.PI/2, anticlockwise)
    if(type === 'stroke') {
        ctx.strokeStyle = color
        ctx.stroke()
    } else {
        ctx.fillStyle = color
        ctx.fill()
    }
    return Vue.prototype
}
export const $drawBezierLine = Vue.prototype.$drawBezierLine = (startPoint, endPoint, ctrlPoint, options) => {
    initError()
    const ctx = Vue.prototype.$ctx
    options = Object.assign(lineOptions, options)
    const { color, lineWidth } = options
    ctx.beginPath()
    startPoint = compile(startPoint)
    endPoint = compile(endPoint)
    ctrlPoint = compile(ctrlPoint)
    ctx.moveTo(startPoint.x, startPoint.y)
    if(ctrlPoint.x1 && ctrlPoint.y1) {
        ctx.bezierCurveTo(ctrlPoint.x, ctrlPoint.y, ctrlPoint.x1, ctrlPoint.y1, endPoint.x, endPoint.y)
    } else {
        ctx.quadraticCurveTo(ctrlPoint.x, ctrlPoint.y, endPoint.x, endPoint.y)
    }
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.stroke()
    return Vue.prototype
}
export const $clearRect = Vue.prototype.$clearRect = (x, y, w, h) => {
    initError()
    const ctx = Vue.prototype.$ctx
    ctx.clearRect(x, y, w, h)
    return Vue.prototype
}

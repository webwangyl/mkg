/*
 * @Descripttion: canvas默认配置
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-07 16:37:16
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-08 10:24:41
 */

const color = 'white'

export const lineOptions = {
    color,
    lineWidth: 1,
    lineCap: 'butt',
}

export const textOptions = {
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 'middle',
    color,
    fontSize: 12,
}

export const circleOptions = {
    start: 0,
    end: 360,
    radius: 10,
    color,
}

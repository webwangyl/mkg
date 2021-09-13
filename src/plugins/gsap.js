/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-02 14:28:41
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-02 17:55:37
 */
import { gsap, MotionPathPlugin, TimelineMax } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin, TimelineMax);
gsap.TimelineMax = TimelineMax

export default gsap;

import BannerAnim, { Element } from 'rc-banner-anim';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

export default function Banner() {
  const { siteConfig } = useDocusaurusContext();
  const data = siteConfig.customFields.bannerList;

  console.log('siteConfig', siteConfig);
  return (
    <BannerAnim prefixCls="banner-user" autoPlay>
      {data.map((item, index) => {
       return <Element key={index}
          prefixCls="banner-user-elem"
          followParallax={{
            delay: 1000,
            data: [
              { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: 'title', value: 50, type: 'x' },
              { id: 'content', value: -30, type: 'x' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: `${item.background}`,
            }}
            id="bg"
          />
          <TweenOne className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: 'from' }}
            id="title"
          >
            {item.title}
          </TweenOne>
          <TweenOne className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            id="content"
          >
            {item.description}
          </TweenOne>
        </Element>
      })}
    </BannerAnim>
  );
}
// export default class extends Component {
//   render() {
    // return (
    //   <BannerAnim prefixCls="banner-user" autoPlay>
    //     <Element key="0"
    //       prefixCls="banner-user-elem"
    //       followParallax={{
    //         delay: 1000,
    //         data: [
    //           { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
    //           { id: 'title', value: 50, type: 'x' },
    //           { id: 'content', value: -30, type: 'x' },
    //         ],
    //       }}
    //     >
    //       <BgElement
    //         key="bg"
    //         className="bg"
    //         style={{
    //           background: '#364D79',
    //         }}
    //         id="bg"
    //       />
    //       <TweenOne className="banner-user-title"
    //         animation={{ y: 30, opacity: 0, type: 'from' }}
    //         id="title"
    //       >
    //         Ant Motion Banner
    //       </TweenOne>
    //       <TweenOne className="banner-user-text"
    //         animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
    //         id="content"
    //       >
    //         The Fast Way Use Animation In React
    //       </TweenOne>
    //     </Element>
    //     <Element key="1"
    //       prefixCls="banner-user-elem"
    //       followParallax={{
    //         delay: 1000,
    //         data: [
    //           { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
    //           { id: 'title', value: 50, type: 'x' },
    //           { id: 'content', value: -30, type: 'x' },
    //         ],
    //       }}
    //     >
    //       <BgElement
    //         key="bg"
    //         className="bg"
    //         style={{
    //           background: '#64CBCC',
    //         }}
    //       />
    //       <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
    //         Ant Motion Banner
    //       </TweenOne>
    //       <TweenOne className="banner-user-text"
    //         animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
    //       >
    //         The Fast Way Use Animation In React
    //       </TweenOne>
    //     </Element>
    //   </BannerAnim>
    // );
  // }
// }

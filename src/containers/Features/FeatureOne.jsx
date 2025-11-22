import React from 'react';
import Slider from 'react-slick';
import {SecSubTitle, SecTitle, TitleWrap} from '../../components/';

const FeatureOne = ({className})=> {

  return (
    <div className={`feature-wrap1 ${className || ''}`}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-6">
            <TitleWrap>
              <SecTitle className="h1">Partners &amp; Platforms</SecTitle>
            </TitleWrap>
          </div>
        </div>
        <Slider
          className="seal-grid"
          autoplay
          infinite
          arrows={false}
          speed={8000}
          autoplaySpeed={0}
          cssEase="linear"
          slidesToShow={6}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
          ]}
        >
          {[
            {
              alt: 'Kumamoto University',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/kumamoto.jpg`,
                `${process.env.PUBLIC_URL}/images/partners/kumamoto.png`,
                `${process.env.PUBLIC_URL}/images/partners/kumamoto.svg`
              ],
            },
            {
              alt: 'Kyoto University',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/kyoto.png`,
                `${process.env.PUBLIC_URL}/images/partners/kyoto.svg`
              ]
            },
            {
              alt: 'INSUS.ch',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/insuswhiteimg.png`,
                `${process.env.PUBLIC_URL}/images/partners/insus.png`,
                `${process.env.PUBLIC_URL}/images/partners/insus.svg`
              ],
              className: 'gradient-blue-teal'
            },
            {
              alt: 'CreatorAdvance.co',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/creatoradvance.png`,
                `${process.env.PUBLIC_URL}/images/partners/creatoradvance.svg`
              ]
            },
            {
              alt: 'Eftax Co., Ltd.',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/eftax.png`,
                `${process.env.PUBLIC_URL}/images/partners/eftax.svg`
              ]
            },
            {
              alt: 'UrbanEcho.io',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/urbanecho.svg`,
                `${process.env.PUBLIC_URL}/images/partners/urbanecho.png`
              ]
            },
            // Platforms
            {
              alt: 'Google Cloud',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/googlecloud.png`
              ]
            },
            {
              alt: 'Amazon Web Services',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/aws.png`
              ]
            },
            {
              alt: 'Microsoft Azure',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/azure.png`
              ]
            },
            {
              alt: 'OpenAI',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/openai.png`
              ]
            },
            {
              alt: 'Anthropic',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/anthropic.png`
              ]
            },
            {
              alt: 'Claude',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/claude.png`
              ]
            },
            {
              alt: 'Grok',
              sources: [
                `${process.env.PUBLIC_URL}/images/partners/grok.png`
              ]
            },
          ].map((logo, idx) => (
            <div key={logo.alt}>
              <div className={`seal-item ${logo.className || ''}`} aria-label={logo.alt}>
                <img
                  src={logo.sources[0]}
                  alt={`${logo.alt} logo`}
                  data-index="0"
                  onError={(e)=> {
                    const el = e.currentTarget;
                    const i = parseInt(el.getAttribute('data-index') || '0', 10);
                    const next = i + 1;
                    if (next < logo.sources.length) {
                      el.setAttribute('data-index', String(next));
                      el.src = logo.sources[next];
                      return;
                    }
                    el.onerror = null;
                    el.src = `${process.env.PUBLIC_URL}/images/brand/br-1-${(idx%6)+1}.png`;
                  }}
                />
                {logo.label ? <div className="seal-label">{logo.label}</div> : null}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeatureOne;

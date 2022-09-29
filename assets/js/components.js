'use strict';

const e = React.createElement;
const Fragment = React.Fragment;

class HomePage extends React.Component {
  state = {
    showMenu: false,
    showStory: false,
    showRoadmap: false,
  };

  render() {
    const hideAllPages = this.state.showStory || this.state.showRoadmap;

    return (
      <Fragment>
        {/* ======================================================================== */}
        {/* MOBILE LAYOUT */}
        {/* ======================================================================== */}
        <div
          className="sm:hidden flex flex-col h-screen"
          style={{
            // About `window.innerHeight`:
            // 1. Makes `h-screen` uneffective
            // 2. `h-screen` is the better approach, however it doesn't calculate the correct height on mobile browsers where, for example in iOS Safari, address bar will "cover" the page's contents
            // 3. You should listen to `resize` events on `window` and reset this element's height
            height: window.innerHeight,
          }}
        >
          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* /// MOBILE MENU //////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div className="bg-emodus-white sticky top-0 flex items-center px-6 place-content-between shadow-lg shadow-emodus-black/20 h-20 flex-shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                [
                  ...document.querySelectorAll('[data-type="page"]'),
                ][0].scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img
                className="h-8"
                src="/assets/img/logo.svg"
                alt="Emodus logo"
              />
            </a>
            <button
              onClick={() => {
                this.setState({ showMenu: !this.state.showMenu });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <ol
              className={`${
                this.state.showMenu ? 'fixed' : 'hidden'
              } right-0 bg-emodus-white top-20 p-6 pt-0 text-center`}
            >
              <li className="mb-2">
                <a
                  className="font-fredokaOne text-xl"
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      [
                        ...document.querySelectorAll('[data-section="story"]'),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    this.setState({ showMenu: false });
                  }}
                >
                  story
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="font-fredokaOne text-xl"
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      [
                        ...document.querySelectorAll('[data-section="types"]'),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    this.setState({ showMenu: false });
                  }}
                >
                  types
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="font-fredokaOne text-xl"
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      [
                        ...document.querySelectorAll(
                          '[data-section="roadmap"]',
                        ),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    this.setState({ showMenu: false });
                  }}
                >
                  roadmap
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="font-fredokaOne text-xl"
                  href="#"
                  onClick={() => {
                    alert('TODO');
                  }}
                >
                  merch
                </a>
              </li>
              <li>
                <a
                  className="font-fredokaOne text-xl"
                  href="#"
                  onClick={() => {
                    alert('TODO');
                  }}
                >
                  team
                </a>
              </li>
            </ol>
          </div>
          {/* END OF MOBILE MENU */}

          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* /// MOBILE PAGES /////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div
            className={`snap-mandatory snap-y overflow-y-auto ${
              this.state.showMenu ? '-z-10' : ''
            }`}
          >
            {/* ======================================================================== */}
            {/* Yellow */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages} data-section="mint">
              <MobilePassportPhotoSection
                containerClassName="bg-emodus-yellow"
                src="/assets/img/yellow-emodus.svg"
              />
              <SimpleMobileSection className="bg-emodus-yellow">
                <Fragment>
                  <p className="mb-6">
                    Renaissance of meme art and a new "culture" phenomenon.
                  </p>
                  <button
                    className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                    href="#"
                  >
                    connect wallet
                  </button>
                </Fragment>
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Blue */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages}>
              <MobilePassportPhotoSection
                containerClassName="bg-emodus-blue"
                src="/assets/img/orange-emodus.svg"
              />
              <SimpleMobileSection className="bg-emodus-blue">
                emodus is the first PFP NFT to use only facial expressions of
                emotion as it's distinguishing feature.
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Red */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages}>
              <MobilePassportPhotoSection
                containerClassName="bg-emodus-red"
                src="/assets/img/green-emodus.svg"
              />
              <SimpleMobileSection className="bg-emodus-red">
                Forget laser eyes and mushroom hats, express yourself with
                emotions which are the accessories of the soul!
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Orange */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages}>
              <MobilePassportPhotoSection
                containerClassName="bg-emodus-orange"
                src="/assets/img/blue-emodus.svg"
              />
              <SimpleMobileSection className="bg-emodus-orange !text-base">
                A total of 3763 modus on Ethereum Blockchain, each one is unique
                due to the combinations of different environments, body status',
                core emotions and facial expressions which gives them their
                "modus".
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Purple */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages}>
              <MobilePassportPhotoSection
                containerClassName="bg-emodus-purple bg-emodus-background bg-no-repeat bg-bottom"
                src="/assets/img/red-emodus.svg"
              />
              <SimpleMobileSection className="bg-emodus-purple !text-base">
                <p className="mb-2">
                  One emodus may appear in a fearful environment with an angry
                  body status, but could have a disgusted expression. meanwhile,
                  a very rare type which we call the "modus extremus" may burst
                  with joy entirely.
                </p>
                <p>Sounds like a regular Monday isn't it ?</p>
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Lisa & the story */}
            {/* ======================================================================== */}
            <MobilePage
              hideAllPages={!this.state.showStory && hideAllPages}
              data-section="story"
            >
              <ImageSection
                containerClassName={`bg-emodus-white pt-8 ${
                  this.state.showStory ? '!hidden' : ''
                }`}
                src="/assets/img/modus-lisa.svg"
              />
              <SimpleMobileSection
                className={`bg-emodus-white !text-base text-center ${
                  this.state.showStory ? 'hidden' : 'block'
                }`}
              >
                <Fragment>
                  <p className="mb-6">
                    "The collection emerged through different interdisciplinary
                    research such as sociology, psychology, neuroscience, and
                    chromatics or simply color science."
                  </p>
                  <a
                    className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ showStory: true }, () => {
                        setTimeout(() => {
                          [
                            ...document.querySelectorAll(
                              '[data-section="story"]',
                            ),
                          ][0].scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      });
                    }}
                  >
                    discover the story
                  </a>
                </Fragment>
              </SimpleMobileSection>
              <SimpleMobileSection
                className={`snap-start ${
                  this.state.showStory ? 'block' : 'hidden'
                }`}
              >
                <p className="text-center text-3xl mb-5">the story</p>
                <p className="text-base mb-5">
                  "The collection emerged through different interdisciplinary
                  research such as sociology, psychology, neuroscience and
                  chromatics or simply color science.
                </p>
                <p className="text-base mb-5">
                  Early stages of the Emodus got a spark from the work of Dr.
                  Paul Ekman and Dr. Eve Ekman's "The Atlas of Emotions" which
                  was commissioned by the Dalai Lama?? and from the work of
                  Plutchik's "Wheel of Emotions"
                </p>
                <img src="/assets/img/story-emotions.jpg" />
                <p className="text-base mb-5">
                  Most psychological research has classified six facial
                  expressions which correspond to distinct universal emotions:
                  joy, surprise, anger, disgust, sadness and fear. It is
                  interesting to note that four out of the six are negative
                  emotions.
                </p>
                <img className="my-6" src="/assets/img/story-colors.svg" />
                <p className="text-base mb-5">
                  After analyzing hundreds of facial expressions randomly from
                  commercials, Hollywood productions and news from mainstream
                  media we have generalized the cues for facial expressions to
                  90 types and each is defined as a "modus" trait which becomes
                  sub-state of six core emotions.
                </p>
                <p className="text-base mb-5">
                  Picking up the right colors was another side of the research.
                  Colors can make us feel happy or sad, and they can make us
                  feel hungry or relaxed. These reactions are rooted in
                  psychological effects, biological conditioning and cultural
                  imprinting. Did you know that a painting hanging in your
                  bedroom with bad color combinations can make you sick? Since
                  we don't want to be sued for our color taste, color tones and
                  colors to be used were selected by the opinion of a colorist.
                </p>
                <p className="text-base mb-5">
                  In order to narrate optimum facial expressions, we utilized
                  only the most expressive organs: eyes with a supporting mouth;
                  this proves that to express one's modus it doesn't need a
                  nose, ear, facial hair or even accessories! Even though not
                  all expressions are inter-culturally comprehensible, we
                  believe everyone will find one part of self in the modus
                  collection, since facial expressions of emotions are part of
                  our evolutionary history and are a biologically innate
                  ability."
                </p>
                <img className="my-8" src="/assets/img/story-scheme.svg" />
                <a
                  className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showStory: false }, () => {
                      [
                        ...document.querySelectorAll('[data-section="types"]'),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    });
                  }}
                >
                  end of the story
                </a>
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Types */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages} data-section="types">
              <p className="font-fredokaOne text-4xl pt-6 text-center mb-6">
                the types
              </p>
              <HorizontalSection
                types={[
                  {
                    images: [
                      '/assets/img/types/1-extremus/100.png',
                      '/assets/img/types/1-extremus/200.png',
                      '/assets/img/types/1-extremus/300.png',
                      '/assets/img/types/1-extremus/400.png',
                      '/assets/img/types/1-extremus/500.png',
                      '/assets/img/types/1-extremus/600.png',
                    ],
                    title: 'modus one',
                    subtitle: '6 XXXX TBD',
                    description:
                      'Nunc mattis enim ut tellus elementum sagittis vitae et. Libero volutpat sed cras ornare arcu dui vivamus.',
                  },
                  {
                    images: [
                      '/assets/img/types/2-snap/0020.png',
                      '/assets/img/types/2-snap/0022.png',
                      '/assets/img/types/2-snap/0023.png',
                      '/assets/img/types/2-snap/0024.png',
                      '/assets/img/types/2-snap/0028.png',
                      '/assets/img/types/2-snap/0030.png',
                      '/assets/img/types/2-snap/0031.png',
                      '/assets/img/types/2-snap/0033.png',
                      '/assets/img/types/2-snap/0036.png',
                      '/assets/img/types/2-snap/0040.png',
                      '/assets/img/types/2-snap/0041.png',
                      '/assets/img/types/2-snap/0042.png',
                      '/assets/img/types/2-snap/0043.png',
                      '/assets/img/types/2-snap/0044.png',
                      '/assets/img/types/2-snap/0046.png',
                      '/assets/img/types/2-snap/0050.png',
                      '/assets/img/types/2-snap/0051.png',
                      '/assets/img/types/2-snap/0052.png',
                      '/assets/img/types/2-snap/0061.png',
                      '/assets/img/types/2-snap/0062.png',
                      '/assets/img/types/2-snap/0063.png',
                      '/assets/img/types/2-snap/0064.png',
                      '/assets/img/types/2-snap/0065.png',
                      '/assets/img/types/2-snap/0066.png',
                      '/assets/img/types/2-snap/0067.png',
                      '/assets/img/types/2-snap/0068.png',
                      '/assets/img/types/2-snap/0071.png',
                      '/assets/img/types/2-snap/0072.png',
                      '/assets/img/types/2-snap/0073.png',
                      '/assets/img/types/2-snap/0074.png',
                      '/assets/img/types/2-snap/0077.png',
                      '/assets/img/types/2-snap/0078.png',
                      '/assets/img/types/2-snap/0081.png',
                      '/assets/img/types/2-snap/0084.png',
                      '/assets/img/types/2-snap/0085.png',
                      '/assets/img/types/2-snap/0086.png',
                      '/assets/img/types/2-snap/0087.png',
                      '/assets/img/types/2-snap/0088.png',
                      '/assets/img/types/2-snap/0089.png',
                      '/assets/img/types/2-snap/0090.png',
                      '/assets/img/types/2-snap/0092.png',
                      '/assets/img/types/2-snap/0094.png',
                      '/assets/img/types/2-snap/0096.png',
                      '/assets/img/types/2-snap/0098.png',
                      '/assets/img/types/2-snap/0099.png',
                      '/assets/img/types/2-snap/0101.png',
                      '/assets/img/types/2-snap/0102.png',
                      '/assets/img/types/2-snap/0105.png',
                      '/assets/img/types/2-snap/0108.png',
                      '/assets/img/types/2-snap/0109.png',
                    ],
                    title: 'modus two',
                    subtitle: '6 XXXX TBD',
                    description:
                      'In hac habitasse platea dictumst quisque sagittis purus. Hendrerit dolor magna eget est lorem ipsum dolor sit amet.',
                  },
                  {
                    images: [
                      '/assets/img/types/3-all-eyes-on-you/0254.png',
                      '/assets/img/types/3-all-eyes-on-you/0260.png',
                      '/assets/img/types/3-all-eyes-on-you/0275.png',
                      '/assets/img/types/3-all-eyes-on-you/0281.png',
                      '/assets/img/types/3-all-eyes-on-you/0283.png',
                      '/assets/img/types/3-all-eyes-on-you/0286.png',
                      '/assets/img/types/3-all-eyes-on-you/0293.png',
                      '/assets/img/types/3-all-eyes-on-you/0302.png',
                      '/assets/img/types/3-all-eyes-on-you/0303.png',
                      '/assets/img/types/3-all-eyes-on-you/0305.png',
                      '/assets/img/types/3-all-eyes-on-you/0309.png',
                      '/assets/img/types/3-all-eyes-on-you/0314.png',
                      '/assets/img/types/3-all-eyes-on-you/0325.png',
                      '/assets/img/types/3-all-eyes-on-you/0335.png',
                      '/assets/img/types/3-all-eyes-on-you/0336.png',
                      '/assets/img/types/3-all-eyes-on-you/0337.png',
                      '/assets/img/types/3-all-eyes-on-you/0342.png',
                      '/assets/img/types/3-all-eyes-on-you/0344.png',
                      '/assets/img/types/3-all-eyes-on-you/0346.png',
                      '/assets/img/types/3-all-eyes-on-you/0353.png',
                      '/assets/img/types/3-all-eyes-on-you/0357.png',
                      '/assets/img/types/3-all-eyes-on-you/0365.png',
                      '/assets/img/types/3-all-eyes-on-you/0368.png',
                      '/assets/img/types/3-all-eyes-on-you/0387.png',
                      '/assets/img/types/3-all-eyes-on-you/0390.png',
                      '/assets/img/types/3-all-eyes-on-you/0394.png',
                      '/assets/img/types/3-all-eyes-on-you/0400.png',
                      '/assets/img/types/3-all-eyes-on-you/0408.png',
                      '/assets/img/types/3-all-eyes-on-you/0413.png',
                      '/assets/img/types/3-all-eyes-on-you/0423.png',
                      '/assets/img/types/3-all-eyes-on-you/0424.png',
                      '/assets/img/types/3-all-eyes-on-you/0435.png',
                      '/assets/img/types/3-all-eyes-on-you/0446.png',
                      '/assets/img/types/3-all-eyes-on-you/0463.png',
                      '/assets/img/types/3-all-eyes-on-you/0468.png',
                      '/assets/img/types/3-all-eyes-on-you/0472.png',
                      '/assets/img/types/3-all-eyes-on-you/0476.png',
                      '/assets/img/types/3-all-eyes-on-you/0485.png',
                      '/assets/img/types/3-all-eyes-on-you/0489.png',
                      '/assets/img/types/3-all-eyes-on-you/0494.png',
                      '/assets/img/types/3-all-eyes-on-you/0505.png',
                      '/assets/img/types/3-all-eyes-on-you/0515.png',
                      '/assets/img/types/3-all-eyes-on-you/0526.png',
                      '/assets/img/types/3-all-eyes-on-you/0553.png',
                      '/assets/img/types/3-all-eyes-on-you/0560.png',
                      '/assets/img/types/3-all-eyes-on-you/0570.png',
                      '/assets/img/types/3-all-eyes-on-you/0575.png',
                      '/assets/img/types/3-all-eyes-on-you/0581.png',
                      '/assets/img/types/3-all-eyes-on-you/0589.png',
                      '/assets/img/types/3-all-eyes-on-you/0594.png',
                    ],
                    title: 'modus three',
                    subtitle: '6 XXXX TBD',
                    description:
                      'Aliquet lectus proin nibh nisl condimentum id venenatis. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
                  },
                  {
                    images: [
                      '/assets/img/types/4-420/24.png',
                      '/assets/img/types/4-420/42.png',
                      '/assets/img/types/4-420/420.png',
                      '/assets/img/types/4-420/1420.png',
                      '/assets/img/types/4-420/2420.png',
                      '/assets/img/types/4-420/3420.png',
                    ],
                    title: 'modus four',
                    subtitle: '6 XXXX TBD',
                    description:
                      'Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Id nibh tortor id aliquet lectus proin nibh nisl.',
                  },
                  {
                    images: [
                      '/assets/img/types/5-rollin/0111.png',
                      '/assets/img/types/5-rollin/0115.png',
                      '/assets/img/types/5-rollin/0120.png',
                      '/assets/img/types/5-rollin/0121.png',
                      '/assets/img/types/5-rollin/0122.png',
                      '/assets/img/types/5-rollin/0125.png',
                      '/assets/img/types/5-rollin/0132.png',
                      '/assets/img/types/5-rollin/0133.png',
                      '/assets/img/types/5-rollin/0134.png',
                      '/assets/img/types/5-rollin/0135.png',
                      '/assets/img/types/5-rollin/0137.png',
                      '/assets/img/types/5-rollin/0139.png',
                      '/assets/img/types/5-rollin/0141.png',
                      '/assets/img/types/5-rollin/0148.png',
                      '/assets/img/types/5-rollin/0152.png',
                      '/assets/img/types/5-rollin/0153.png',
                      '/assets/img/types/5-rollin/0155.png',
                      '/assets/img/types/5-rollin/0159.png',
                      '/assets/img/types/5-rollin/0161.png',
                      '/assets/img/types/5-rollin/0163.png',
                      '/assets/img/types/5-rollin/0164.png',
                      '/assets/img/types/5-rollin/0171.png',
                      '/assets/img/types/5-rollin/0176.png',
                      '/assets/img/types/5-rollin/0178.png',
                      '/assets/img/types/5-rollin/0183.png',
                      '/assets/img/types/5-rollin/0186.png',
                      '/assets/img/types/5-rollin/0187.png',
                      '/assets/img/types/5-rollin/0190.png',
                      '/assets/img/types/5-rollin/0196.png',
                      '/assets/img/types/5-rollin/0200.png',
                      '/assets/img/types/5-rollin/0202.png',
                      '/assets/img/types/5-rollin/0205.png',
                      '/assets/img/types/5-rollin/0208.png',
                      '/assets/img/types/5-rollin/0212.png',
                      '/assets/img/types/5-rollin/0214.png',
                      '/assets/img/types/5-rollin/0216.png',
                      '/assets/img/types/5-rollin/0219.png',
                      '/assets/img/types/5-rollin/0223.png',
                      '/assets/img/types/5-rollin/0224.png',
                      '/assets/img/types/5-rollin/0225.png',
                      '/assets/img/types/5-rollin/0229.png',
                      '/assets/img/types/5-rollin/0233.png',
                      '/assets/img/types/5-rollin/0235.png',
                      '/assets/img/types/5-rollin/0236.png',
                      '/assets/img/types/5-rollin/0238.png',
                      '/assets/img/types/5-rollin/0240.png',
                      '/assets/img/types/5-rollin/0243.png',
                      '/assets/img/types/5-rollin/0245.png',
                      '/assets/img/types/5-rollin/0249.png',
                      '/assets/img/types/5-rollin/0253.png',
                    ],
                    title: 'modus five',
                    subtitle: '6 XXXX TBD',
                    description:
                      'Nisl nunc mi ipsum faucibus vitae aliquet. Orci sagittis eu volutpat odio.',
                  },
                  {
                    images: [
                      '/assets/img/types/6-pride/0014.png',
                      '/assets/img/types/6-pride/0015.png',
                      '/assets/img/types/6-pride/0016.png',
                      '/assets/img/types/6-pride/0017.png',
                      '/assets/img/types/6-pride/0018.png',
                      '/assets/img/types/6-pride/0019.png',
                    ],
                    title: 'modus X',
                    subtitle: '6 XXXX TBD',
                    description:
                      'Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Duis ut diam quam nulla porttitor massa id neque aliquam.',
                  },
                  {
                    images: [
                      '/assets/img/types/7-genuine/0617.png',
                      '/assets/img/types/7-genuine/0624.png',
                      '/assets/img/types/7-genuine/0637.png',
                      '/assets/img/types/7-genuine/0645.png',
                      '/assets/img/types/7-genuine/0650.png',
                      '/assets/img/types/7-genuine/0663.png',
                      '/assets/img/types/7-genuine/0668.png',
                      '/assets/img/types/7-genuine/0681.png',
                      '/assets/img/types/7-genuine/0711.png',
                      '/assets/img/types/7-genuine/0720.png',
                      '/assets/img/types/7-genuine/0740.png',
                      '/assets/img/types/7-genuine/0755.png',
                      '/assets/img/types/7-genuine/0769.png',
                      '/assets/img/types/7-genuine/1031.png',
                      '/assets/img/types/7-genuine/1053.png',
                      '/assets/img/types/7-genuine/1184.png',
                      '/assets/img/types/7-genuine/1208.png',
                      '/assets/img/types/7-genuine/1221.png',
                      '/assets/img/types/7-genuine/1305.png',
                      '/assets/img/types/7-genuine/1315.png',
                      '/assets/img/types/7-genuine/1318.png',
                      '/assets/img/types/7-genuine/1331.png',
                      '/assets/img/types/7-genuine/1394.png',
                      '/assets/img/types/7-genuine/1398.png',
                      '/assets/img/types/7-genuine/1412.png',
                      '/assets/img/types/7-genuine/1426.png',
                      '/assets/img/types/7-genuine/1447.png',
                      '/assets/img/types/7-genuine/1459.png',
                      '/assets/img/types/7-genuine/1512.png',
                      '/assets/img/types/7-genuine/1530.png',
                      '/assets/img/types/7-genuine/1545.png',
                      '/assets/img/types/7-genuine/1573.png',
                      '/assets/img/types/7-genuine/1595.png',
                      '/assets/img/types/7-genuine/1599.png',
                      '/assets/img/types/7-genuine/1626.png',
                      '/assets/img/types/7-genuine/1680.png',
                      '/assets/img/types/7-genuine/1696.png',
                      '/assets/img/types/7-genuine/1710.png',
                      '/assets/img/types/7-genuine/1739.png',
                      '/assets/img/types/7-genuine/1770.png',
                      '/assets/img/types/7-genuine/1793.png',
                      '/assets/img/types/7-genuine/1818.png',
                      '/assets/img/types/7-genuine/1868.png',
                      '/assets/img/types/7-genuine/1917.png',
                      '/assets/img/types/7-genuine/1930.png',
                      '/assets/img/types/7-genuine/2001.png',
                      '/assets/img/types/7-genuine/2034.png',
                      '/assets/img/types/7-genuine/2047.png',
                      '/assets/img/types/7-genuine/2060.png',
                      '/assets/img/types/7-genuine/2091.png',
                      '/assets/img/types/7-genuine/2212.png',
                      '/assets/img/types/7-genuine/2299.png',
                      '/assets/img/types/7-genuine/2304.png',
                      '/assets/img/types/7-genuine/2332.png',
                      '/assets/img/types/7-genuine/2365.png',
                      '/assets/img/types/7-genuine/2412.png',
                      '/assets/img/types/7-genuine/2629.png',
                      '/assets/img/types/7-genuine/2633.png',
                      '/assets/img/types/7-genuine/2654.png',
                      '/assets/img/types/7-genuine/2668.png',
                      '/assets/img/types/7-genuine/2733.png',
                      '/assets/img/types/7-genuine/2743.png',
                      '/assets/img/types/7-genuine/2747.png',
                      '/assets/img/types/7-genuine/2808.png',
                      '/assets/img/types/7-genuine/2874.png',
                      '/assets/img/types/7-genuine/2931.png',
                      '/assets/img/types/7-genuine/2933.png',
                      '/assets/img/types/7-genuine/3028.png',
                      '/assets/img/types/7-genuine/3029.png',
                      '/assets/img/types/7-genuine/3078.png',
                      '/assets/img/types/7-genuine/3081.png',
                      '/assets/img/types/7-genuine/3112.png',
                      '/assets/img/types/7-genuine/3137.png',
                      '/assets/img/types/7-genuine/3255.png',
                      '/assets/img/types/7-genuine/3330.png',
                      '/assets/img/types/7-genuine/3353.png',
                      '/assets/img/types/7-genuine/3432.png',
                      '/assets/img/types/7-genuine/3531.png',
                      '/assets/img/types/7-genuine/3544.png',
                      '/assets/img/types/7-genuine/3587.png',
                      '/assets/img/types/7-genuine/3719.png',
                      '/assets/img/types/7-genuine/3726.png',
                      '/assets/img/types/7-genuine/3740.png',
                      '/assets/img/types/7-genuine/3755.png',
                    ],
                    title: 'modus X',
                    subtitle: '6 XXXX TBD',
                    description:
                      'Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Duis ut diam quam nulla porttitor massa id neque aliquam.',
                  },
                ]}
              />
            </MobilePage>

            {/* ======================================================================== */}
            {/* The roadmap */}
            {/* ======================================================================== */}
            <MobilePage
              hideAllPages={!this.state.showRoadmap && hideAllPages}
              data-section="roadmap"
            >
              <SimpleMobileSection
                className={`flex-grow bg-discover-background !text-base bg-cover ${
                  this.state.showRoadmap ? 'hidden' : 'flex'
                } flex-col justify-center`}
              >
                <Fragment>
                  <p className="mb-6">
                    We believe that some NFT art collections should pass "we're
                    building a community so strong we will overthrow the
                    government" or "we'll be in the metaverse, matrix, and also
                    on mars" or "this is the best return of investment
                    ponzi-nomics" cliché.
                  </p>
                  <a
                    className="block w-fit mx-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ showRoadmap: true }, () => {
                        setTimeout(() => {
                          [
                            ...document.querySelectorAll(
                              '[data-section="roadmap"]',
                            ),
                          ][0].scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      });
                    }}
                  >
                    discover the roadmap
                  </a>
                </Fragment>
              </SimpleMobileSection>
              <SimpleMobileSection
                className={`snap-start ${
                  this.state.showRoadmap ? 'block' : 'hidden'
                }`}
              >
                <p className="text-center text-3xl mb-5">the roadmap</p>
                <p className="text-base mb-5">
                  We believe that some NFT art collections should pass "we're
                  building a community so strong we will overthrow the
                  government" or "we'll be in the metaverse, matrix and also on
                  mars" or "this is the best return of investment ponzi-nomics"
                  cliché.
                </p>
                <p className="text-base mb-5">
                  Emodus collection consists of wiselv created tiny pieces of
                  artwork with a little bit of science, philosophy and humor
                  sauce on it. Obviously not a project that copying blue chip
                  strategies with clip art. It's unfortunate that the crowd that
                  has gravitated to it, is not interested in digital art, and
                  has treated it like a casino.
                </p>
                <p className="text-base mb-5">
                  Why we don't prefer to start this with whitelist because
                  whitelist grinding is an absolutely horrifying experience that
                  creates an artificial community and promotes in-genuine
                  conversations and connections. These artificial communities
                  are fragile and easily destructible.
                </p>
                <p className="text-base mb-5">
                  We hope to create a culture that inherently reflects the core
                  values of a true community. A community where people truly
                  feel connected with each other through these memes.
                </p>
                <p className="text-base mb-5">
                  As VENI VIDI NFT, we are not going to over promise or
                  underdeliver with our first project because we are intended to
                  be in WEB3 in the long run with our holders' trust.
                </p>
                <p className="text-base mb-5">
                  Therefore 6% of all sales will be kept in the wallet and after
                  the collection has been sold, we will be quided by the holders
                  of Emodus who saw the potential and liked the concept.
                </p>
                <p className="text-base mb-5">
                  Holders will vote and decide whether the fund should be used
                  for charity work or giving back to holders or to be used for
                  other ideas that will be designated with the community.
                </p>
                <a
                  className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showRoadmap: false }, () => {
                      [
                        ...document.querySelectorAll('[data-section="mint"]'),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    });
                  }}
                >
                  let's mint!
                </a>
              </SimpleMobileSection>
              <SimpleMobileSection
                className={`!flex-grow-0 snap-start bg-emodus-white text-center py-12 ${
                  this.state.showRoadmap ? 'hidden' : 'block'
                }`}
              >
                <div className="flex">
                  <a href="https://venividinft.io">
                    <img
                      className="h-[5rem]"
                      src="/assets/img/team-logo.svg"
                      alt="Team logo"
                    />
                  </a>
                  <div className="flex-grow text-right flex flex-col justify-end">
                    <a className="text-[0.7rem]" href="https://venividinft.io">
                      venividinft.io
                    </a>
                    <p className="text-[0.5rem]">
                      Copyright © 2022 VENI VIDI NFT | All Rights Reserved.
                    </p>
                  </div>
                </div>
              </SimpleMobileSection>
            </MobilePage>
          </div>
          {/* END OF MOBILE PAGES */}
        </div>
        {/* END OF MOBILE LAYOUT */}

        {/* ======================================================================== */}
        {/* DESKTOP LAYOUT */}
        {/* ======================================================================== */}
        <div className="hidden sm:block">
          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* /// DESKTOP MENU /////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div className="bg-emodus-white sticky top-0 flex items-center px-16 place-content-between h-32 flex-shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                [
                  ...document.querySelectorAll('[data-type="page"]'),
                ][0].scrollIntoView({ behavior: 'smooth' });
              }}
              className="-mt-3"
            >
              <img
                className="h-14"
                src="/assets/img/logo.svg"
                alt="Emodus logo"
              />
            </a>
            <ol className="flex font-fredoka font-semibold text-3xl">
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      [
                        ...document.querySelectorAll('[data-section="story"]'),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    this.setState({ showMenu: false });
                  }}
                >
                  story
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      [
                        ...document.querySelectorAll('[data-section="types"]'),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    this.setState({ showMenu: false });
                  }}
                >
                  types
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={() => {
                    setTimeout(() => {
                      [
                        ...document.querySelectorAll(
                          '[data-section="roadmap"]',
                        ),
                      ][0].scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                    this.setState({ showMenu: false });
                  }}
                >
                  roadmap
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={() => {
                    alert('TODO');
                  }}
                >
                  merch
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={() => {
                    alert('TODO');
                  }}
                >
                  team
                </a>
              </li>
            </ol>
          </div>
          {/* END OF DESKTOP MENU */}

          {/* //////////////////////////////////////////////////////////////////////// */}
          {/* /// DESKTOP PAGES ////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////// */}

          {/* ======================================================================== */}
          {/* Yellow */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-yellow" data-section="mint">
            <DesktopPassportPhotoSection src="/assets/img/yellow-emodus.svg" />
            <SimpleDesktopSection>
              <Fragment>
                <p className="mb-6">
                  Renaissance of meme art and a new "culture" phenomenon.
                </p>
                <button
                  className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                  href="#"
                >
                  connect wallet
                </button>
              </Fragment>
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Blue */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-blue flex-row-reverse">
            <DesktopPassportPhotoSection src="/assets/img/orange-emodus.svg" />
            <SimpleDesktopSection>
              emodus is the first PFP NFT to use only facial expressions of
              emotion as it's distinguishing feature.
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Red */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-red">
            <DesktopPassportPhotoSection src="/assets/img/green-emodus.svg" />
            <SimpleDesktopSection>
              Forget laser eyes and mushroom hats, express yourself with
              emotions which are the accessories of the soul!
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Orange */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-orange flex-row-reverse">
            <DesktopPassportPhotoSection src="/assets/img/blue-emodus.svg" />
            <SimpleDesktopSection>
              A total of 3763 modus on Ethereum Blockchain, each one is unique
              due to the combinations of different environments, body status',
              core emotions and facial expressions which gives them their
              "modus".
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Purple */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-purple">
            <DesktopPassportPhotoSection src="/assets/img/red-emodus.svg" />
            <SimpleDesktopSection>
              <p className="mb-2">
                One emodus may appear in a fearful environment with an angry
                body status, but could have a disgusted expression. meanwhile, a
                very rare type which we call the "modus extremus" may burst with
                joy entirely.
              </p>
              <p>Sounds like a regular Monday isn't it ?</p>
            </SimpleDesktopSection>
          </DesktopPage>
          {/* END OF DESKTOP PAGES */}
        </div>
        {/* END OF DESKTOP LAYOUT */}
      </Fragment>
    );
  }
}

class DesktopPage extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} flex`}>
        {this.props.children}
      </div>
    );
  }
}

class DesktopPassportPhotoSection extends React.Component {
  render() {
    return <img src={this.props.src} />;
  }
}

class SimpleDesktopSection extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center font-fredokaOne text-5xl px-16">
        {this.props.children}
      </div>
    );
  }
}

// Responsible for laying out its components and scroll snapping
class MobilePage extends React.Component {
  render() {
    if (
      this.props.children[this.props.children.length - 1].props
        .containerClassName
    ) {
      this.props.children[
        this.props.children.length - 1
      ].props.containerClassName = `flex-grow ${
        this.props.children[this.props.children.length - 1].props
          .containerClassName
      }`;
    } else {
      this.props.children[
        this.props.children.length - 1
      ].props.className = `flex-grow ${
        this.props.children[this.props.children.length - 1].props.className
      }`;
    }

    return (
      <div
        id={this.props.id}
        className={`snap-start h-full ${
          this.props.hideAllPages ? 'hidden' : 'flex'
        } flex-col`}
        data-type="page"
        data-section={this.props['data-section']}
      >
        {this.props.children}
      </div>
    );
  }
}

class ImageSection extends React.Component {
  render() {
    return (
      <div
        className={`flex flex-col justify-end items-center min-h-0 ${this.props.containerClassName}`}
      >
        <img className="min-h-full" src={this.props.src} />
      </div>
    );
  }
}

class MobilePassportPhotoSection extends React.Component {
  render() {
    return (
      <Fragment>
        {/* Center Oversized Image in Div: https://stackoverflow.com/a/19414020/11895 */}
        <div
          className={`relative h-screen overflow-hidden ${this.props.containerClassName}`}
        >
          <img
            className="absolute max-w-none -top-[9999px] -bottom-[9999px] -right-[9999px] -left-[9999px] m-auto pl-14 h-[72vh]"
            src={this.props.src}
          />
          <div className="absolute -top-[9999px] -bottom-[9999px] -right-[9999px] -left-[9999px] m-auto bg-emodus-background bg-no-repeat bg-bottom h-full"></div>
        </div>
      </Fragment>
    );
  }
}

class SimpleMobileSection extends React.Component {
  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <div
        className={`px-6 py-6 font-fredokaOne text-2xl ${className || ''}`}
        {...restProps}
      >
        {children}
      </div>
    );
  }
}

// Returns a random number between min (inclusive) and max (exclusive)
function _randomIntInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _pickRandomFrom(items) {
  return items[_randomIntInRange(0, items.length)];
}

class HorizontalSection extends React.Component {
  _intervals = [];

  constructor(props) {
    super(props);

    this.state = {
      images: this.props.types.map(({ images }) => _pickRandomFrom(images)),
    };
  }

  componentDidMount() {
    for (let index = 0; index < this.props.types.length; index++) {
      const typeImages = this.props.types[index].images;

      this._intervals.push(
        setInterval(
          () => {
            const images = [...this.state.images];
            images[index] = _pickRandomFrom(typeImages);

            this.setState({
              images,
            });
          },
          typeImages.length > 50 ? 1000 : _randomIntInRange(2000, 3000),
        ),
      );
    }
  }

  componentWillUnmount() {
    for (const id of _intervals) {
      clearInterval(id);
    }
  }

  render() {
    return (
      <div className="snap-mandatory snap-x flex overflow-x-auto h-full">
        {this.props.types.map(({ title, subtitle, description }, index) => (
          <div className="snap-center shrink-0 w-2/3 first:ml-16 ml-10">
            <img
              src={this.state.images[index]}
              className="shadow-xl shadow-emodus-black/30 mb-6"
            />
            <p className="font-fredokaOne text-center text-3xl mb-1">{title}</p>
            <p className="font-fredokaOne text-center text-sm mb-1">
              {subtitle}
            </p>
            <p className="font-fredoka font-semibold">{description}</p>
          </div>
        ))}
        {/* For the right-most margin, which otherwise would collapse: */}
        <div className="shrink-0 w-16" />
      </div>
    );
  }
}

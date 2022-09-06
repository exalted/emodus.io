'use strict';

const e = React.createElement;
const Fragment = React.Fragment;

class HomePage extends React.Component {
  state = {
    showStory: false,
    showRoadmap: false,
  };

  render() {
    const hideAllPages = this.state.showStory || this.state.showRoadmap;

    return (
      <div
        className="flex flex-col h-screen"
        style={{
          // About `window.innerHeight`:
          // 1. Makes `h-screen` uneffective
          // 2. `h-screen` is the better approach, however it doesn't calculate the correct height on mobile browsers where, for example in iOS Safari, address bar will "cover" the page's contents
          // 3. You should listen to `resize` events on `window` and reset this element's height
          height: window.innerHeight,
        }}
      >
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
            <img className="h-8" src="/assets/img/logo.svg" alt="Emodus logo" />
          </a>

          <button>
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
        </div>

        <div className="snap-mandatory snap-y overflow-y-auto">
          {/* ============================================================== */}
          <Page hideAllPages={hideAllPages} data-section="mint">
            <PassportPhotoSection
              containerClassName="bg-emodus-yellow"
              src="/assets/img/yellow-emodus.svg"
            />
            <SimpleSection className="bg-emodus-yellow">
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
            </SimpleSection>
          </Page>

          {/* ============================================================== */}
          <Page hideAllPages={hideAllPages}>
            <PassportPhotoSection
              containerClassName="bg-emodus-blue"
              src="/assets/img/orange-emodus.svg"
            />
            <SimpleSection className="bg-emodus-blue">
              emodus is the first PFP NFT to use only facial expressions of
              emotion as it's distinguishing feature.
            </SimpleSection>
          </Page>

          {/* ============================================================== */}
          <Page hideAllPages={hideAllPages}>
            <PassportPhotoSection
              containerClassName="bg-emodus-red"
              src="/assets/img/green-emodus.svg"
            />
            <SimpleSection className="bg-emodus-red">
              Forget laser eyes and mushroom hats, express yourself with
              emotions which are the accessories of the soul!
            </SimpleSection>
          </Page>

          {/* ============================================================== */}
          <Page hideAllPages={hideAllPages}>
            <PassportPhotoSection
              containerClassName="bg-emodus-orange"
              src="/assets/img/blue-emodus.svg"
            />
            <SimpleSection className="bg-emodus-orange !text-base">
              A total of 3763 modus on Ethereum Blockchain, each one is unique
              due to the combinations of different environments, body status',
              core emotions and facial expressions which gives them their
              "modus".
            </SimpleSection>
          </Page>

          {/* ============================================================== */}
          <Page hideAllPages={hideAllPages}>
            <PassportPhotoSection
              containerClassName="bg-emodus-purple bg-emodus-background bg-no-repeat bg-bottom"
              src="/assets/img/red-emodus.svg"
            />
            <SimpleSection className="bg-emodus-purple !text-base">
              <p className="mb-2">
                One emodus may appear in a fearful environment with an angry
                body status, but could have a disgusted expression. meanwhile, a
                very rare type which we call the "modus extremus" may burst with
                joy entirely.
              </p>
              <p>Sounds like a regular Monday isn't it ?</p>
            </SimpleSection>
          </Page>

          {/* ============================================================== */}
          <Page
            hideAllPages={!this.state.showStory && hideAllPages}
            data-section="story"
          >
            <ImageSection
              containerClassName={`bg-emodus-white pt-8 ${
                this.state.showStory ? '!hidden' : ''
              }`}
              src="/assets/img/modus-lisa.svg"
            />
            <SimpleSection
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
            </SimpleSection>
            <SimpleSection
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
                Early stages of the Emodus got a spark from the work of Dr. Paul
                Ekman and Dr. Eve Ekman's "The Atlas of Emotions" which was
                commissioned by the Dalai Lama?? and from the work of Plutchik's
                "Wheel of Emotions"
              </p>
              <p className="text-base mb-5">
                Most psychological research has classified six facial
                expressions which correspond to distinct universal emotions:
                joy, surprise, anger, disgust, sadness and fear. It is
                interesting to note that four out of the six are negative
                emotions.
              </p>
              <img className="h-[5rem]" src="/assets/img/story-colors.svg" />
              <p className="text-base mb-5">
                After analyzing hundreds of facial expressions randomly from
                commercials, Hollywood productions and news from mainstream
                media we have generalized the cues for facial expressions to 90
                types and each is defined as a "modus" trait which becomes
                sub-state of six core emotions.
              </p>
              <p className="text-base mb-5">
                Picking up the right colors was another side of the research.
                Colors can make us feel happy or sad, and they can make us feel
                hungry or relaxed. These reactions are rooted in psychological
                effects, biological conditioning and cultural imprinting. Did
                you know that a painting hanging in your bedroom with bad color
                combinations can make you sick? Since we don't want to be sued
                for our color taste, color tones and colors to be used were
                selected by the opinion of a colorist.
              </p>
              <p className="text-base mb-5">
                In order to narrate optimum facial expressions, we utilized only
                the most expressive organs: eyes with a supporting mouth; this
                proves that to express one's modus it doesn't need a nose, ear,
                facial hair or even accessories! Even though not all expressions
                are inter-culturally comprehensible, we believe everyone will
                find one part of self in the modus collection, since facial
                expressions of emotions are part of our evolutionary history and
                are a biologically innate ability."
              </p>
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
            </SimpleSection>
          </Page>

          {/* ============================================================== */}
          <Page hideAllPages={hideAllPages} data-section="types">
            <p className="font-fredokaOne text-4xl pt-6 text-center mb-6">
              the types
            </p>
            <HorizontalSection
              types={[
                {
                  image: '/assets/img/type-1.png',
                  title: 'modus one',
                  subtitle: '6 XXXX TBD',
                  description:
                    'Nunc mattis enim ut tellus elementum sagittis vitae et. Libero volutpat sed cras ornare arcu dui vivamus.',
                },
                {
                  image: '/assets/img/type-2.png',
                  title: 'modus two',
                  subtitle: '6 XXXX TBD',
                  description:
                    'In hac habitasse platea dictumst quisque sagittis purus. Hendrerit dolor magna eget est lorem ipsum dolor sit amet.',
                },
                {
                  image: '/assets/img/type-3.png',
                  title: 'modus three',
                  subtitle: '6 XXXX TBD',
                  description:
                    'Aliquet lectus proin nibh nisl condimentum id venenatis. Gravida cum sociis natoque penatibus et magnis dis parturient montes.',
                },
                {
                  image: '/assets/img/type-4.png',
                  title: 'modus four',
                  subtitle: '6 XXXX TBD',
                  description:
                    'Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Id nibh tortor id aliquet lectus proin nibh nisl.',
                },
                {
                  image: '/assets/img/type-5.png',
                  title: 'modus five',
                  subtitle: '6 XXXX TBD',
                  description:
                    'Nisl nunc mi ipsum faucibus vitae aliquet. Orci sagittis eu volutpat odio.',
                },
                {
                  image: '/assets/img/type-6.png',
                  title: 'modus X',
                  subtitle: '6 XXXX TBD',
                  description:
                    'Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Duis ut diam quam nulla porttitor massa id neque aliquam.',
                },
              ]}
            />
          </Page>

          {/* ============================================================== */}
          <Page
            hideAllPages={!this.state.showRoadmap && hideAllPages}
            data-section="roadmap"
          >
            <SimpleSection
              className={`flex-grow bg-discover-background !text-base bg-cover ${
                this.state.showRoadmap ? 'hidden' : 'flex'
              } flex-col justify-center`}
            >
              <Fragment>
                <p className="mb-6">
                  We believe that some NFT art collections should pass "we're
                  building a community so strong we will overthrow the
                  government" or "we'll be in the metaverse, matrix, and also on
                  mars" or "this is the best return of investment ponzi-nomics"
                  cliché.
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
                      }, 200);
                    });
                  }}
                >
                  discover the roadmap
                </a>
              </Fragment>
            </SimpleSection>
            <SimpleSection
              className={`snap-start ${
                this.state.showRoadmap ? 'block' : 'hidden'
              }`}
            >
              <p className="text-center text-3xl mb-5">the roadmap</p>
              <p className="text-base mb-5">
                We believe that some NFT art collections should pass "we're
                building a community so strong we will overthrow the government"
                or "we'll be in the metaverse, matrix and also on mars" or "this
                is the best return of investment ponzi-nomics" cliché.
              </p>
              <p className="text-base mb-5">
                Emodus collection consists of wiselv created tiny pieces of
                artwork with a little bit of science, philosophy and humor sauce
                on it. Obviously not a project that copying blue chip strategies
                with clip art. It's unfortunate that the crowd that has
                gravitated to it, is not interested in digital art, and has
                treated it like a casino.
              </p>
              <p className="text-base mb-5">
                Why we don't prefer to start this with whitelist because
                whitelist grinding is an absolutely horrifying experience that
                creates an artificial community and promotes in-genuine
                conversations and connections. These artificial communities are
                fragile and easily destructible.
              </p>
              <p className="text-base mb-5">
                We hope to create a culture that inherently reflects the core
                values of a true community. A community where people truly feel
                connected with each other through these memes.
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
                Holders will vote and decide whether the fund should be used for
                charity work or giving back to holders or to be used for other
                ideas that will be designated with the community.
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
            </SimpleSection>
            <SimpleSection
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
            </SimpleSection>
          </Page>
        </div>
      </div>
    );
  }
}

// Responsible for laying out its components and scroll snapping
class Page extends React.Component {
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

class PassportPhotoSection extends React.Component {
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

class SimpleSection extends React.Component {
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

class HorizontalSection extends React.Component {
  render() {
    return (
      <div className="snap-mandatory snap-x flex overflow-x-auto h-full">
        {this.props.types.map(({ image, title, subtitle, description }) => (
          <div className="snap-center shrink-0 w-2/3 first:ml-16 ml-10">
            <img
              src={image}
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

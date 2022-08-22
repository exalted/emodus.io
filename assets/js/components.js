'use strict';

const e = React.createElement;
const Fragment = React.Fragment;

class HomePage extends React.Component {
  render() {
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
          <img className="h-8" src="/assets/img/logo.svg" alt="Emodus logo" />
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
        <div className="snap-mandatory snap-y overflow-scroll">
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-yellow bg-emodus-background bg-no-repeat bg-bottom"
                src="/assets/img/yellow-emodus.svg"
              />
            }
            bottomSection={
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
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-blue bg-emodus-background bg-no-repeat bg-bottom"
                src="/assets/img/orange-emodus.svg"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-blue">
                emodus is the first PFP NFT to use only facial expressions of
                emotion as it's distinguishing feature.
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-red bg-emodus-background bg-no-repeat bg-bottom"
                src="/assets/img/green-emodus.svg"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-red">
                Forget laser eyes and mushroom hats, express yourself with
                emotions which are the accessories of the soul!
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-orange bg-emodus-background bg-no-repeat bg-bottom"
                src="/assets/img/blue-emodus.svg"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-orange !text-base">
                A total of 3763 modus on Ethereum Blockchain, each one is unique
                due to the combinations of different environments, body status',
                core emotions and facial expressions which gives them their
                "modus".
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-purple bg-emodus-background bg-no-repeat bg-bottom"
                src="/assets/img/red-emodus.svg"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-purple !text-base">
                <p className="mb-2">
                  One emodus may appear in a fearful environment with an angry
                  body status, but could have a disgusted expression. meanwhile,
                  a very rare type which we call the "modus extremus" may burst
                  with joy entirely.
                </p>
                <p>Sounds like a regular Monday isn't it ?</p>
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-white pt-8"
                src="/assets/img/modus-lisa.svg"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-white !text-base text-center">
                <Fragment>
                  <p className="mb-6">
                    "The collection emerged through different interdisciplinary
                    research such as sociology, psychology, neuroscience, and
                    chromatics or simply color science."
                  </p>
                  <a
                    className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                    href="#"
                  >
                    discover the story
                  </a>
                </Fragment>
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <SimpleSection className="bg-discover-background !text-base bg-cover flex flex-col justify-end">
                <Fragment>
                  <p className="mb-6">
                    We believe that some NFT art collections should pass "we're
                    building a community so strong we will overthrow the
                    government" or "we'll be in the metaverse, matrix, and also
                    on mars" or "this is the best return of investment
                    ponzi-nomics" cliché.
                  </p>
                  <a
                    className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                    href="#"
                  >
                    discover the roadmap
                  </a>
                </Fragment>
              </SimpleSection>
            }
            bottomSection={
              <SimpleSection className="bg-emodus-white text-center py-12">
                <div className="flex">
                  <img
                    className="h-[5rem]"
                    src="/assets/img/team-logo.svg"
                    alt="Team logo"
                  />
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
            }
          />
        </div>
      </div>
    );
  }
}

// Responsible for laying out its components (i.e. topSection and bottomSection) and scroll snapping
class Page extends React.Component {
  render() {
    if (this.props.bottomSection) {
      if (this.props.bottomSection.props.containerClassName) {
        this.props.bottomSection.props.containerClassName = `flex-grow ${this.props.bottomSection.props.containerClassName}`;
      } else {
        this.props.bottomSection.props.className = `flex-grow ${this.props.bottomSection.props.className}`;
      }
    }

    return (
      <div id={this.props.id} className="snap-start h-full flex flex-col">
        {this.props.topSection}
        {this.props.bottomSection}
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

class SimpleSection extends React.Component {
  render() {
    return (
      <div
        className={`px-6 py-6 font-fredokaOne text-2xl ${this.props.className}`}
      >
        {this.props.children}
      </div>
    );
  }
}

'use strict';

const e = React.createElement;
const Fragment = React.Fragment;

class HomePage extends React.Component {
  render() {
    return (
      <div className="flex flex-col h-screen">
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
                containerClassName="bg-emodus-white !border-emodus-white pb-12"
                imageClassName="bg-emodus-white w-4/5 shadow-2xl"
                src="/assets/img/page-1.png"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-white text-center pt-0">
                <div>
                  <p className="mb-6">
                    "The collection emerged through different interdisciplinary
                    research such as sociology, psychology, neuroscience, and
                    chromatics or simply color science."
                  </p>
                  <a
                    className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black text-2xl font-fredoka font-semibold"
                    href="#"
                  >
                    discover the story
                  </a>
                </div>
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-red"
                imageClassName="bg-emodus-red"
                src="/assets/img/page-2.png"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-white text-2xl">
                Forget laser eyes and mushroom hats, express yourself with
                emotions which are the accessories of the soul!
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-blue"
                imageClassName="bg-emodus-blue"
                src="/assets/img/page-2.png"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-white text-2xl">
                emodus is the first PFP NFT to use only facial expressions of
                emotion as it's distinguishing feature.
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <ImageSection
                containerClassName="bg-emodus-orange"
                imageClassName="bg-emodus-orange"
                src="/assets/img/page-3.png"
              />
            }
            bottomSection={
              <SimpleSection className="bg-emodus-white text-2xl">
                A total of 3763 emodus on Ethereum blockchain, each one is
                unique due to the combinations of different environments, body
                statuses, core emotions, and facial expressions which gives them
                their "modus".
              </SimpleSection>
            }
          />
          {/* ============================================================== */}
          <Page
            topSection={
              <SimpleSection className="bg-discover-background bg-cover text-xl flex flex-col justify-end">
                <div>
                  <p className="mb-6">
                    We believe that some NFT art collections should pass "we're
                    building a community so strong we will overthrow the
                    government" or "we'll be in the metaverse, matrix, and also
                    on mars" or "this is the best return of investment
                    ponzi-nomics" cliché.
                  </p>
                  <a
                    className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black text-2xl font-fredoka font-semibold"
                    href="#"
                  >
                    discover the roadmap
                  </a>
                </div>
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
    if (this.props.topSection.props.containerClassName) {
      this.props.topSection.props.containerClassName = `flex-grow ${this.props.topSection.props.containerClassName}`;
    } else {
      this.props.topSection.props.className = `flex-grow ${this.props.topSection.props.className}`;
    }

    return (
      <div className="snap-start h-full flex flex-col">
        {this.props.topSection}
        {this.props.bottomSection}
      </div>
    );
  }
}

class SimpleSection extends React.Component {
  render() {
    return (
      <div className={`px-8 py-8 font-fredokaOne ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

class ImageSection extends React.Component {
  render() {
    return (
      <div
        className={`flex flex-col justify-end items-center border-b-4 border-emodus-black ${this.props.containerClassName}`}
      >
        <img className={this.props.imageClassName} src={this.props.src} />
      </div>
    );
  }
}

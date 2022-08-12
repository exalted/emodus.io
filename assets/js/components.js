'use strict';

const e = React.createElement;
const Fragment = React.Fragment;

const HEADER_HEIGHT = 76;

const contentHeight = window.innerHeight - HEADER_HEIGHT;

class HomePage extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div
          className="bg-emodus-white fixed w-full flex items-center px-6 place-content-between shadow-lg shadow-emodus-black/20"
          style={{ height: `${HEADER_HEIGHT}px` }}
        >
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
        <div
          className="snap-mandatory snap-y overflow-scroll"
          style={{
            marginTop: `${HEADER_HEIGHT}px`,
            height: `${contentHeight}px`,
          }}
        >
          <Page
            content={
              <ImageSection
                className="bg-emodus-red"
                src="/assets/img/page-1.png"
              />
            }
            footer={
              <TextSection className="bg-emodus-white">
                Forget laser eyes and mushroom hats, express yourself with
                emotions which are the accessories of the soul!
              </TextSection>
            }
          />
          <Page
            content={
              <ImageSection
                className="bg-emodus-blue"
                src="/assets/img/page-2.png"
              />
            }
            footer={
              <TextSection className="bg-emodus-white">
                emodus is the first PFP NFT to use only facial expressions of
                emotion as it's distinguishing feature.
              </TextSection>
            }
          />
          <Page
            content={
              <ImageSection
                className="bg-emodus-orange"
                src="/assets/img/page-3.png"
              />
            }
            footer={
              <TextSection className="bg-emodus-white">
                A total of 3763 emodus on Ethereum blockchain, each one is
                unique due to the combinations of different environments, body
                statuses, core emotions, and facial expressions which gives them
                their "modus".
              </TextSection>
            }
          />
        </div>
      </div>
    );
  }
}

// Responsible for laying out its components (i.e. content and footer)
class Page extends React.Component {
  render() {
    return (
      <div
        className="snap-start flex flex-col"
        style={{ minHeight: `${contentHeight}px` }}
      >
        {this.props.content}
        {this.props.footer}
      </div>
    );
  }
}

class ImageSection extends React.Component {
  render() {
    return (
      <div
        className={`flex-grow flex flex-col justify-end items-center border-b-4 border-emodus-black ${this.props.className}`}
      >
        <img className={this.props.className} src={this.props.src} />
      </div>
    );
  }
}

class TextSection extends React.Component {
  render() {
    return (
      <div
        className={`px-8 py-5 font-fredokaOne text-2xl ${this.props.className}`}
      >
        {this.props.children}
      </div>
    );
  }
}

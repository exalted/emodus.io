'use strict';

const e = React.createElement;
const Fragment = React.Fragment;

class HomePage extends React.Component {
  state = {
    showMenu: false,
    showStory: false,
    showRoadmap: false,

    connectWalletButtonVisible: true,
    mintFormVisible: false,
    numberOfTokens: 1,
  };

  componentDidMount() {
    const component = this;

    try {
      _contract()
        .methods.totalSupply()
        .call()
        .then((totalSupply) => {
          component.setState({ totalSupply });
        })
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  }

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
                mobileScroll('[data-type="page"]');
              }}
            >
              <img
                className="h-8"
                src="/assets/img/logo.svg?checksum=40d6f808d01187774f1e9363ed1a625e"
                alt="emodus logo"
              />
            </a>
            <button
              onClick={() => {
                this.setState({ showMenu: !this.state.showMenu });
              }}
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
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
                  onClick={(e) => {
                    e.preventDefault();
                    mobileScroll('[data-section="story"]');
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
                  onClick={(e) => {
                    e.preventDefault();
                    mobileScroll('[data-section="types"]');
                    this.setState({ showMenu: false });
                  }}
                >
                  types
                </a>
              </li>
              <li>
                <a
                  className="font-fredokaOne text-xl"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    mobileScroll('[data-section="roadmap"]');
                    this.setState({ showMenu: false });
                  }}
                >
                  roadmap
                </a>
              </li>
              <li>
                <a href="https://opensea.io/collection/emodus" target="_blank">
                  <div className="h-8">
                    <img
                      className="h-full mx-auto mt-3"
                      src="/assets/img/opensea.png?checksum=60df61ec8b4f43dc0c401c4132cdc4d9"
                      alt="OpenSea logo"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/EmodusNFT" target="_blank">
                  <div className="h-7">
                    <img
                      className="h-full mx-auto mt-3"
                      src="/assets/img/twitter.png?checksum=ca206dbd1624238f73e870f0bac5254c"
                      alt="Twitter logo"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/JrhwhuJ9SU" target="_blank">
                  <div className="h-7">
                    <img
                      className="h-full mx-auto mt-3"
                      src="/assets/img/discord.png?checksum=b15afab957dcc2af7307e40921f2fa70"
                      alt="Discord logo"
                    />
                  </div>
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
                src="/assets/img/yellow-emodus.svg?checksum=9cc48d68abd85bc82d742fed39906ea9"
              />
              <SimpleMobileSection className="bg-emodus-yellow">
                <div
                  className={
                    this.state.connectWalletButtonVisible ? '' : 'hidden'
                  }
                >
                  <p className="mb-4">
                    Renaissance of meme art and a new "culture" phenomenon.
                  </p>
                  <button
                    className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold mb-2"
                    onClick={() => {
                      const component = this;

                      if (!window.ethereum || !window.ethereum.isMetaMask) {
                        alert(
                          "You don't have Metamask installed. Go to https://metamask.io now to install.",
                        );
                        return;
                      }

                      window.ethereum
                        .enable()
                        .then((_accounts) => {
                          // Metamask is ready to go!
                          component.setState({
                            connectWalletButtonVisible: false,
                            mintFormVisible: true,
                          });
                        })
                        .catch((error) => {
                          if (error.code === 4001) {
                            component.setState({
                              connectWalletButtonVisible: true,
                              mintFormVisible: false,
                            });
                            alert(
                              'You should be connected to a Metamask account. Try again.',
                            );
                            return;
                          }

                          if (error.code === -32002) {
                            alert(
                              'Try again after opening your Metamask and unlocking it.',
                            );
                            return;
                          }

                          alert(error.message);
                        });
                    }}
                  >
                    connect metamask
                  </button>
                  <p className="text-center text-lg -mb-2">
                    MINT PRICE 0.02 ETH
                  </p>
                  <p className="text-center text-lg -mb-2">
                    10 Mint per Wallet
                  </p>
                </div>
                <div className={this.state.mintFormVisible ? '' : 'hidden'}>
                  <div className="flex justify-center mb-4">
                    <button
                      className="mr-4 border-[5px] px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                      disabled={this.state.mintButtonDisabled}
                      onClick={() => {
                        const component = this;

                        component.setState({ mintButtonDisabled: true });

                        const web3 = AlchemyWeb3.createAlchemyWeb3(
                          'https://eth-mainnet.g.alchemy.com/v2/dQNiFZ9PFlWUP-VeSXvGEnuSffP9SniD',
                        );

                        try {
                          _contract()
                            .methods.mint(component.state.numberOfTokens)
                            .send({
                              from: window.ethereum.selectedAddress,
                              value: web3.utils.toWei(
                                (
                                  0.02 * component.state.numberOfTokens
                                ).toString(),
                                'ether',
                              ),
                            })
                            .then((_receipt) => {
                              component.setState({
                                mintButtonDisabled: false,
                              });
                            })
                            .catch((error) => {
                              component.setState({
                                mintButtonDisabled: false,
                              });

                              if (
                                !error.code &&
                                error.message ===
                                  'No "from" address specified in neither the given options, nor the default options.'
                              ) {
                                component.setState({
                                  connectWalletButtonVisible: true,
                                  mintFormVisible: false,
                                });
                                alert(
                                  'You should be connected to a Metamask account. Try again.',
                                );
                                return;
                              }

                              if (!error.code) {
                                alert(error.message);
                                return;
                              }

                              if (error.code === 4001) {
                                alert(
                                  'You rejected the transaction. Try again.',
                                );
                                return;
                              }

                              alert(error.message);
                            });
                        } catch (error) {
                          console.error(error);
                        }
                      }}
                    >
                      mint
                    </button>
                    <div className="flex">
                      <button
                        className="border-[5px] px-5 pb-1 rounded-full border-solid border-emodus-black mr-1"
                        disabled={this.state.numberOfTokens === 1}
                        onClick={() => {
                          if (this.state.numberOfTokens === 1) {
                            return;
                          }

                          this.setState({
                            numberOfTokens: this.state.numberOfTokens - 1,
                          });
                        }}
                        aria-label="Decrement"
                      >
                        -
                      </button>
                      <input
                        className="border-[5px] text-center py-2 w-16 border-solid rounded-none border-emodus-black mr-1"
                        type="number"
                        min="1"
                        max="10"
                        value={this.state.numberOfTokens}
                      ></input>
                      <button
                        className="border-[5px] px-5 pb-1 rounded-full border-solid border-emodus-black"
                        disabled={this.state.numberOfTokens === 10}
                        onClick={() => {
                          if (this.state.numberOfTokens === 10) {
                            return;
                          }

                          this.setState({
                            numberOfTokens: this.state.numberOfTokens + 1,
                          });
                        }}
                        aria-label="Increment"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-center text-lg">
                    {this.state.totalSupply || '_'} minted so far
                  </p>
                  <p className="text-center text-lg">Gas Efficient Contract</p>
                </div>
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Blue */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages}>
              <MobilePassportPhotoSection
                containerClassName="bg-emodus-blue"
                src="/assets/img/orange-emodus.svg?checksum=090b1f2f6723ef3cf71eb67f197f3af6"
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
                src="/assets/img/green-emodus.svg?checksum=7b0b8a32d36d9648073c85e3561e5a18"
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
                src="/assets/img/blue-emodus.svg?checksum=605a7735eee50e0639dfcc0964efd91f"
              />
              <SimpleMobileSection className="bg-emodus-orange !text-base">
                A total of 3763 emodus on Ethereum Blockchain, each one is
                unique due to the combinations of different environments, body
                status', core emotions and facial expressions which gives them
                their "modus".
              </SimpleMobileSection>
            </MobilePage>

            {/* ======================================================================== */}
            {/* Purple */}
            {/* ======================================================================== */}
            <MobilePage hideAllPages={hideAllPages}>
              <MobilePassportPhotoSection
                containerClassName="bg-emodus-purple bg-emodus-background bg-no-repeat bg-bottom"
                src="/assets/img/red-emodus.svg?checksum=02c9e0a5737633920c5ab33a76eaa1ef"
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
                src="/assets/img/modus-lisa.svg?checksum=ff3bc4d1fb5ad1d05f27f09f8e497a32"
                alt="Modus Lisa"
              />
              <SimpleMobileSection
                className={`bg-emodus-white !text-base text-center ${
                  this.state.showStory ? 'hidden' : 'block'
                }`}
              >
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
                      mobileScroll('[data-section="story"]');
                    });
                  }}
                >
                  discover the story
                </a>
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
                  Early stages of the emodus got a spark from the work of Dr.
                  Paul Ekman and Dr. Eve Ekman’s The Atlas of Emotions and from
                  the work of Plutchik’s Wheel of Emotions.
                </p>
                <img
                  src="/assets/img/story-emotions.jpg"
                  alt="The Atlas of Emotions"
                />
                <p className="text-base mb-5">
                  Most psychological research has classified six facial
                  expressions which correspond to distinct universal emotions:
                  joy, surprise, anger, disgust, sadness and fear. It is
                  interesting to note that four out of the six are negative
                  emotions.
                </p>
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
                <img
                  className="my-6"
                  src="/assets/img/story-colors.svg?checksum=0a6dd69aa901da835e9e8094fef88247"
                  alt="emodus colors"
                />
                <p className="text-base mb-5">
                  In order to narrate optimum facial expressions, we utilized
                  only the most expressive organs: eyes with a supporting mouth;
                  this proves that to express one's modus it doesn't need a
                  nose, ear, facial hair or even accessories! Even though not
                  all expressions are inter-culturally comprehensible, we
                  believe everyone will find one part of self in the emodus
                  collection, since facial expressions of emotions are part of
                  our evolutionary history and are a biologically innate
                  ability."
                </p>
                <img
                  className="my-8"
                  src="/assets/img/story-scheme.svg?checksum=40e63459efb28cc949af1ee62a7c5c46"
                  alt="emodus scheme"
                />
                <a
                  className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showStory: false }, () => {
                      mobileScroll('[data-section="types"]');
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
              <HorizontalSection />
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
                <p className="mb-6">
                  We believe that some NFT art collections should pass "we're
                  building a community so strong we will overthrow the
                  government" or "we'll be in the metaverse, matrix and also on
                  mars" or “this is the best return of investment ponzi-nomics”
                  cliché.
                </p>
                <a
                  className="block w-fit mx-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showRoadmap: true }, () => {
                      mobileScroll('[data-section="roadmap"]');
                    });
                  }}
                >
                  discover the roadmap
                </a>
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
                  mars" or “this is the best return of investment ponzi-nomics”
                  cliché.
                </p>
                <p className="text-base mb-5">
                  emodus collection consists of wisely created tiny pieces of
                  artwork with a little bit of science, philosophy and humor
                  sauce on it. Obviously not a project that copying blue chip
                  strategies with clip art. It's unfortunate that the crowd that
                  has gravitated to it, is not interested in digital art, and
                  has treated NFT space like a casino.
                </p>
                <p className="text-base mb-5">
                  Why we don’t prefer to start this with whitelist because
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
                  Therefore 5% of all sales will be kept in the{' '}
                  <a
                    href="https://etherscan.io/address/0xdb412d9789fea1999442ae774d81bb9b8b544a0e"
                    target="_blank"
                    className="text-blue-600"
                  >
                    wallet
                  </a>{' '}
                  and after 80% of the collection has been sold, one of our
                  holders will be selected by a lottery discord bot to be
                  awarded with it.
                </p>
                <p className="text-base mb-5">
                  That’s not all! We want to make an impact and we want emodus
                  holders to be a part of it.
                </p>
                <p className="text-base mb-5">
                  The pearl of the collection, Modus Lisa, will be auctioned and
                  emodus holders will decide which crypto accepting charity
                  should be donated with it.
                </p>
                <p className="text-base mb-5">
                  Because if we're not reaching back to help anyone then we're
                  not building a legacy.
                </p>
                <a
                  className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ showRoadmap: false }, () => {
                      mobileScroll('[data-section="mint"]');
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
                      src="/assets/img/team-logo.svg?checksum=e22b9a057b9497f4f89ba60aa391acb9"
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
                desktopScroll('[data-type="desktop-page"]');
              }}
              className="-mt-3"
            >
              <img
                className="h-14"
                src="/assets/img/logo.svg?checksum=40d6f808d01187774f1e9363ed1a625e"
                alt="emodus logo"
              />
            </a>
            <ol className="flex font-fredoka font-semibold text-3xl">
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    desktopScroll('[data-section="desktop-story"]');
                    this.setState({ showMenu: false });
                  }}
                >
                  story
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    desktopScroll('[data-section="desktop-types"]');
                    this.setState({ showMenu: false });
                  }}
                >
                  types
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    desktopScroll('[data-section="desktop-roadmap"]');
                    this.setState({ showMenu: false });
                  }}
                >
                  roadmap
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a href="https://opensea.io/collection/emodus" target="_blank">
                  <div className="h-8">
                    <img
                      className="h-full mx-auto mt-1"
                      src="/assets/img/opensea.png?checksum=60df61ec8b4f43dc0c401c4132cdc4d9"
                      alt="OpenSea logo"
                    />
                  </div>
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a href="https://twitter.com/EmodusNFT" target="_blank">
                  <div className="h-7">
                    <img
                      className="h-full mx-auto mt-[6px]"
                      src="/assets/img/twitter.png?checksum=ca206dbd1624238f73e870f0bac5254c"
                      alt="Twitter logo"
                    />
                  </div>
                </a>
              </li>
              <li className="border-r-[1.5px] border-l-[1.5px] -ml-[2.6px] first:border-l-0 last:border-r-0 rounded-[1px] px-5 border-emodus-black py-[2px]">
                <a href="https://discord.gg/JrhwhuJ9SU" target="_blank">
                  <div className="h-7">
                    <img
                      className="h-full mx-auto mt-[6px]"
                      src="/assets/img/discord.png?checksum=b15afab957dcc2af7307e40921f2fa70"
                      alt="Discord logo"
                    />
                  </div>
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
            <DesktopPassportPhotoSection
              className="pl-24"
              src="/assets/img/yellow-emodus_desktop.png?checksum=e3080f81a90aac2748029e674832d901"
            />
            <SimpleDesktopSection className="pl-16 pr-4 text-5xl">
              <p className="mb-20">
                Renaissance of meme art and a new "culture" phenomenon.
              </p>
              <div
                className={
                  this.state.connectWalletButtonVisible ? '' : 'hidden'
                }
              >
                <button
                  className="block w-fit mx-auto mb-4 border-8 px-10 pt-3 pb-4 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                  onClick={() => {
                    const component = this;

                    if (!window.ethereum || !window.ethereum.isMetaMask) {
                      alert(
                        "You don't have Metamask installed. Go to https://metamask.io now to install.",
                      );
                      return;
                    }

                    window.ethereum
                      .enable()
                      .then((_accounts) => {
                        // Metamask is ready to go!
                        component.setState({
                          connectWalletButtonVisible: false,
                          mintFormVisible: true,
                        });
                      })
                      .catch((error) => {
                        if (error.code === 4001) {
                          component.setState({
                            connectWalletButtonVisible: true,
                            mintFormVisible: false,
                          });
                          alert(
                            'You should be connected to a Metamask account. Try again.',
                          );
                          return;
                        }

                        if (error.code === -32002) {
                          alert(
                            'Try again after opening your Metamask and unlocking it.',
                          );
                          return;
                        }

                        alert(error.message);
                      });
                  }}
                >
                  connect metamask
                </button>
                <p className="text-center text-lg">MINT PRICE 0.02 ETH</p>
                <p className="text-center text-lg">10 Mint per Wallet</p>
              </div>
              <div className={this.state.mintFormVisible ? '' : 'hidden'}>
                <div className="flex justify-center mb-12">
                  <button
                    className="mr-4 border-8 px-10 pt-3 pb-4 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                    disabled={this.state.mintButtonDisabled}
                    onClick={() => {
                      const component = this;

                      component.setState({ mintButtonDisabled: true });

                      const web3 = AlchemyWeb3.createAlchemyWeb3(
                        'https://eth-mainnet.g.alchemy.com/v2/dQNiFZ9PFlWUP-VeSXvGEnuSffP9SniD',
                      );

                      try {
                        _contract()
                          .methods.mint(component.state.numberOfTokens)
                          .send({
                            from: window.ethereum.selectedAddress,
                            value: web3.utils.toWei(
                              (
                                0.02 * component.state.numberOfTokens
                              ).toString(),
                              'ether',
                            ),
                          })
                          .then((_receipt) => {
                            component.setState({
                              mintButtonDisabled: false,
                            });
                          })
                          .catch((error) => {
                            component.setState({
                              mintButtonDisabled: false,
                            });

                            if (
                              !error.code &&
                              error.message ===
                                'No "from" address specified in neither the given options, nor the default options.'
                            ) {
                              component.setState({
                                connectWalletButtonVisible: true,
                                mintFormVisible: false,
                              });
                              alert(
                                'You should be connected to a Metamask account. Try again.',
                              );
                              return;
                            }

                            if (!error.code) {
                              alert(error.message);
                              return;
                            }

                            if (error.code === 4001) {
                              alert('You rejected the transaction. Try again.');
                              return;
                            }

                            alert(error.message);
                          });
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    mint
                  </button>
                  <div className="flex">
                    <button
                      className="border-8 h-fit px-[19px] pb-[10px] place-self-center rounded-full border-solid border-emodus-black mr-1"
                      disabled={this.state.numberOfTokens === 1}
                      onClick={() => {
                        if (this.state.numberOfTokens === 1) {
                          return;
                        }

                        this.setState({
                          numberOfTokens: this.state.numberOfTokens - 1,
                        });
                      }}
                      aria-label="Decrement"
                    >
                      -
                    </button>
                    <input
                      className="border-8 place-self-center text-center w-[5.6rem] pl-[11px] border-solid rounded-none border-emodus-black mr-1"
                      type="number"
                      min="1"
                      max="10"
                      value={this.state.numberOfTokens}
                    ></input>
                    <button
                      className="border-8 h-fit px-[16.4px] pb-[10px] place-self-center rounded-full border-solid border-emodus-black"
                      disabled={this.state.numberOfTokens === 10}
                      onClick={() => {
                        if (this.state.numberOfTokens === 10) {
                          return;
                        }

                        this.setState({
                          numberOfTokens: this.state.numberOfTokens + 1,
                        });
                      }}
                      aria-label="Increment"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-center text-2xl">
                  {this.state.totalSupply || '_'} minted so far
                </p>
                <p className="text-center text-2xl">Gas Efficient Contract</p>
              </div>
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Blue */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-blue flex-row-reverse">
            <DesktopPassportPhotoSection
              className="pr-24"
              src="/assets/img/orange-emodus_desktop.png?checksum=4f09cae02e7ca3fb759c322734777e97"
            />
            <SimpleDesktopSection className="pl-16 text-5xl">
              emodus is the first PFP NFT to use only facial expressions of
              emotion as it's distinguishing feature.
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Red */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-red">
            <DesktopPassportPhotoSection
              className="pl-24"
              src="/assets/img/green-emodus_desktop.png?checksum=3e39d288d01575fb591ad9d1998db01b"
            />
            <SimpleDesktopSection className="px-16 text-5xl">
              Forget laser eyes and mushroom hats, express yourself with
              emotions which are the accessories of the soul!
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Orange */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-orange flex-row-reverse">
            <DesktopPassportPhotoSection
              className="pr-24"
              src="/assets/img/blue-emodus_desktop.png?checksum=8f5d7469dc30f5ac428e25723c77eb91"
            />
            <SimpleDesktopSection className="pl-16 pr-4 text-4xl">
              A total of 3763 emodus on Ethereum Blockchain, each one is unique
              due to the combinations of different environments, body status',
              core emotions and facial expressions which gives them their
              "modus".
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Purple */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-purple">
            <DesktopPassportPhotoSection
              className="pl-24"
              src="/assets/img/red-emodus_desktop.png?checksum=e22b8eb9b2afcffe85e9c836509d08c4"
            />
            <SimpleDesktopSection className="pl-16 pr-4 text-4xl">
              <p className="mb-10">
                One emodus may appear in a fearful environment with an angry
                body status, but could have a disgusted expression. meanwhile, a
                very rare type which we call the "modus extremus" may burst with
                joy entirely.
              </p>
              <p>Sounds like a regular Monday isn't it ?</p>
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Lisa & the story */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-white border-b-[1px] border-gray-400">
            <DesktopLisaPhotoSection />
            <SimpleDesktopSection
              data-section="desktop-story"
              className="pl-16 pr-4 text-4xl"
            >
              <p className="mb-20">
                "The collection emerged through different interdisciplinary
                research such as sociology, psychology, neuroscience, and
                chromatics or simply color science."
              </p>
              <a
                className="block w-fit mx-auto border-8 px-10 pt-3 pb-4 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ showStory: true }, () => {
                    desktopScroll('[data-section="desktop-discover-story"]');
                  });
                }}
              >
                discover the story
              </a>
            </SimpleDesktopSection>
          </DesktopPage>
          <SimpleDesktopSection
            className={`${
              this.state.showStory ? '!block' : 'hidden'
            } px-28 pt-20`}
            data-section="desktop-discover-story"
          >
            <p className="text-center text-5xl mb-12">the story</p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              "The collection emerged through different interdisciplinary
              research such as sociology, psychology, neuroscience and
              chromatics or simply color science.
            </p>
            <img
              className="float-right w-1/2 -mt-14"
              src="/assets/img/story-emotions.jpg"
              alt="The Atlas of Emotions"
            />
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Early stages of the emodus got a spark from the work of Dr. Paul
              Ekman and Dr. Eve Ekman’s The Atlas of Emotions and from the work
              of Plutchik’s Wheel of Emotions.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Most psychological research has classified six facial expressions
              which correspond to distinct universal emotions: joy, surprise,
              anger, disgust, sadness and fear. It is interesting to note that
              four out of the six are negative emotions.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              After analyzing hundreds of facial expressions randomly from
              commercials, Hollywood productions and news from mainstream media
              we have generalized the cues for facial expressions to 90 types
              and each is defined as a "modus" trait which becomes sub-state of
              six core emotions.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Picking up the right colors was another side of the research.
              Colors can make us feel happy or sad, and they can make us feel
              hungry or relaxed. These reactions are rooted in psychological
              effects, biological conditioning and cultural imprinting. Did you
              know that a painting hanging in your bedroom with bad color
              combinations can make you sick? Since we don't want to be sued for
              our color taste, color tones and colors to be used were selected
              by the opinion of a colorist.
            </p>
            <img
              className="my-6 mx-auto"
              src="/assets/img/story-colors.svg?checksum=0a6dd69aa901da835e9e8094fef88247"
              alt="emodus colors"
            />
            <p className="text-3xl font-fredoka font-semibold mb-12">
              In order to narrate optimum facial expressions, we utilized only
              the most expressive organs: eyes with a supporting mouth; this
              proves that to express one's modus it doesn't need a nose, ear,
              facial hair or even accessories! Even though not all expressions
              are inter-culturally comprehensible, we believe everyone will find
              one part of self in the emodus collection, since facial
              expressions of emotions are part of our evolutionary history and
              are a biologically innate ability."
            </p>
            <img
              className="mb-6"
              src="/assets/img/story-scheme.svg?checksum=40e63459efb28cc949af1ee62a7c5c46"
              alt="emodus scheme"
            />
            <div className="bg-emodus-background bg-repeat-x bg-bottom h-32 w-screen -mx-28"></div>
          </SimpleDesktopSection>

          {/* ======================================================================== */}
          {/* Types */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-white">
            <DesktopTypesSection
              onChange={({ title, subtitle, description }) => {
                this.setState({
                  selectedDesktopModusTitle: title,
                  selectedDesktopModusSubtitle: subtitle,
                  selectedDesktopModusDescription: description,
                });
              }}
            />
            <SimpleDesktopSection
              data-section="desktop-types"
              className="self-start mt-28 pr-16"
            >
              <p className="text-5xl mb-8">types:</p>
              <p className="text-6xl mb-8">
                {this.state.selectedDesktopModusTitle}
              </p>
              <p className="text-3xl mb-4">
                {this.state.selectedDesktopModusSubtitle}
              </p>
              <p className="font-fredoka text-2xl">
                {this.state.selectedDesktopModusDescription}
              </p>
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* The roadmap */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-discover-background bg-cover bg-center">
            <SimpleDesktopSection
              data-section="desktop-roadmap"
              className="text-5xl px-20"
            >
              <p className="mb-20">
                We believe that some NFT art collections should pass "we're
                building a community so strong we will overthrow the government"
                or "we'll be in the metaverse, matrix and also on mars" or “this
                is the best return of investment ponzi-nomics” cliché.
              </p>
              <a
                className="block w-fit mx-auto border-8 px-10 pt-3 pb-4 rounded-full border-solid border-emodus-black font-fredoka font-semibold"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ showRoadmap: true }, () => {
                    desktopScroll('[data-section="desktop-discover-roadmap"]');
                  });
                }}
              >
                discover the roadmap
              </a>
            </SimpleDesktopSection>
          </DesktopPage>
          <SimpleDesktopSection
            className={`${this.state.showRoadmap ? '' : 'hidden'} px-28 pt-20`}
            data-section="desktop-discover-roadmap"
          >
            <p className="text-center text-5xl mb-12">the roadmap</p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              We believe that some NFT art collections should pass "we're
              building a community so strong we will overthrow the government"
              or "we'll be in the metaverse, matrix and also on mars" or “this
              is the best return of investment ponzi-nomics” cliché.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              emodus collection consists of wisely created tiny pieces of
              artwork with a little bit of science, philosophy and humor sauce
              on it. Obviously not a project that copying blue chip strategies
              with clip art. It's unfortunate that the crowd that has gravitated
              to it, is not interested in digital art, and has treated NFT space
              like a casino.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Why we don’t prefer to start this with whitelist because whitelist
              grinding is an absolutely horrifying experience that creates an
              artificial community and promotes in-genuine conversations and
              connections. These artificial communities are fragile and easily
              destructible.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              We hope to create a culture that inherently reflects the core
              values of a true community. A community where people truly feel
              connected with each other through these memes.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              As VENI VIDI NFT, we are not going to over promise or underdeliver
              with our first project because we are intended to be in WEB3 in
              the long run with our holders' trust.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Therefore 5% of all sales will be kept in the{' '}
              <a
                href="https://etherscan.io/address/0xdb412d9789fea1999442ae774d81bb9b8b544a0e"
                target="_blank"
                className="text-blue-600"
              >
                wallet
              </a>{' '}
              and after 80% of the collection has been sold, one of our holders
              will be selected by a lottery discord bot to be awarded with it.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              That’s not all! We want to make an impact and we want emodus
              holders to be a part of it.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              The pearl of the collection, Modus Lisa, will be auctioned and
              emodus holders will decide which crypto accepting charity should
              be donated with it.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Because if we're not reaching back to help anyone then we're not
              building a legacy.
            </p>
            <div className="bg-emodus-background bg-repeat-x bg-bottom h-32 w-screen -mx-28"></div>
          </SimpleDesktopSection>

          {/* ======================================================================== */}
          {/* Footer */}
          {/* ======================================================================== */}
          <div className="flex p-16 font-fredokaOne">
            <a href="https://venividinft.io">
              <img
                className="h-40"
                src="/assets/img/team-logo.svg?checksum=e22b9a057b9497f4f89ba60aa391acb9"
                alt="Team logo"
              />
            </a>
            <a className="self-end" href="https://venividinft.io">
              venividinft.io
            </a>
            <div className="flex-grow text-right flex flex-col justify-end">
              <p>Copyright © 2022 VENI VIDI NFT | All Rights Reserved.</p>
            </div>
          </div>
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
      <div
        id={this.props.id}
        className={`${this.props.className} flex h-[46rem] overflow-hidden`}
        data-type="desktop-page"
      >
        {this.props.children}
      </div>
    );
  }
}

class DesktopPassportPhotoSection extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} min-w-[500px] max-w-[500px]`}>
        <img
          className="object-contain h-[160%] -mt-20"
          src={this.props.src}
          alt="Modus photo"
        />
      </div>
    );
  }
}

class DesktopLisaPhotoSection extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.className} min-w-[600px] max-w-[600px] pl-20`}
      >
        <img
          className="object-contain h-[160%] -mt-48"
          src="/assets/img/modus-lisa.svg?checksum=ff3bc4d1fb5ad1d05f27f09f8e497a32"
          alt="Modus Lisa"
        />
      </div>
    );
  }
}

class SimpleDesktopSection extends React.Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={`${this.props.className} flex flex-col justify-center font-fredokaOne`}
        data-section={this.props['data-section']}
      >
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
        <img className="min-h-full" src={this.props.src} alt={this.props.alt} />
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
            className="absolute max-w-none -top-[9999px] -bottom-[9999px] -right-[9999px] -left-[9999px] m-auto pl-14 h-[70vh]"
            src={this.props.src}
            alt="Modus photo"
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
        className={`px-6 py-4 font-fredokaOne text-2xl ${className || ''}`}
        {...restProps}
      >
        {children}
      </div>
    );
  }
}

function mobileScroll(selector) {
  setTimeout(() => {
    [...document.querySelectorAll(selector)][0].scrollIntoView({
      behavior: 'smooth',
    });
  }, 100);
}

function desktopScroll(selector) {
  setTimeout(() => {
    window.scrollTo({
      top:
        [...document.querySelectorAll(selector)][0].getBoundingClientRect()
          .top +
        window.pageYOffset -
        128,
      behavior: 'smooth',
    });
  }, 100);
}

// Returns a random number between min (inclusive) and max (exclusive)
function _randomIntInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function _pickRandomFrom(items, except) {
  let selected;
  do {
    selected = items[_randomIntInRange(0, items.length)];
  } while (selected === except);

  return selected;
}

class HorizontalSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: EMODUS_TYPES.map(({ images }) => _pickRandomFrom(images)),
    };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      const images = EMODUS_TYPES.map(({ images }, index) =>
        _pickRandomFrom(images, this.state.images[index]),
      );

      this.setState({
        images,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <div className="snap-mandatory snap-x flex overflow-x-auto h-full">
        {EMODUS_TYPES.map(({ title, subtitle, description }, index) => (
          <div className="snap-center shrink-0 w-2/3 first:ml-16 ml-10">
            <img
              src={this.state.images[index]}
              className="shadow-xl shadow-emodus-black/30 mb-6"
              alt="Modus type"
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

class DesktopTypesSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: EMODUS_TYPES.map(({ images }) => _pickRandomFrom(images)),
      selectedType: 0,
    };
  }

  componentDidMount() {
    this.props.onChange(EMODUS_TYPES[this.state.selectedType]);

    this._interval = setInterval(() => {
      const images = EMODUS_TYPES.map(({ images }, index) =>
        _pickRandomFrom(images, this.state.images[index]),
      );

      this.setState({
        images,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <div className="flex items-center">
        <button
          onClick={() => {
            const selectedType =
              this.state.selectedType - 1 < 0
                ? EMODUS_TYPES.length - 1
                : this.state.selectedType - 1;
            this.setState({ selectedType });
            this.props.onChange(EMODUS_TYPES[selectedType]);
          }}
          aria-label="Previous type"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="w-[540px]">
          <img
            className="object-contain shadow-2xl shadow-emodus-black/60"
            src={this.state.images[this.state.selectedType]}
            alt="Modus type"
          />
        </div>
        <button
          onClick={() => {
            const selectedType =
              (this.state.selectedType + 1) % EMODUS_TYPES.length;
            this.setState({ selectedType });
            this.props.onChange(EMODUS_TYPES[selectedType]);
          }}
          aria-label="Next type"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  }
}

function _contract() {
  const web3 = AlchemyWeb3.createAlchemyWeb3(
    'https://eth-mainnet.g.alchemy.com/v2/dQNiFZ9PFlWUP-VeSXvGEnuSffP9SniD',
  );

  return new web3.eth.Contract(
    [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'ApprovalCallerNotOwnerNorApproved',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ApprovalQueryForNonexistentToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ApproveToCaller',
        type: 'error',
      },
      {
        inputs: [],
        name: 'BalanceQueryForZeroAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MintERC2309QuantityExceedsLimit',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MintToZeroAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MintZeroQuantity',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OwnerQueryForNonexistentToken',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OwnershipNotInitializedForExtraData',
        type: 'error',
      },
      {
        inputs: [],
        name: 'TransferCallerNotOwnerNorApproved',
        type: 'error',
      },
      {
        inputs: [],
        name: 'TransferFromIncorrectOwner',
        type: 'error',
      },
      {
        inputs: [],
        name: 'TransferToNonERC721ReceiverImplementer',
        type: 'error',
      },
      {
        inputs: [],
        name: 'TransferToZeroAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'URIQueryForNonexistentToken',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'fromTokenId',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'toTokenId',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'ConsecutiveTransfer',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'getApproved',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        name: 'isApprovedForAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
        ],
        name: 'reserve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: '_data',
            type: 'bytes',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'tokenURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'weiAmount',
            type: 'uint256',
          },
        ],
        name: 'transferEther',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    '0x2003279E298D2860e84cCdDAAEaf0778113BA5fb',
  );
}

const EMODUS_TYPES = [
  {
    images: [
      '/assets/img/types/7-genuine/0617.png?checksum=d7827bf171717ce79e296bb81149e333',
      '/assets/img/types/7-genuine/0624.png?checksum=9b909a5a32d57fac31c814498bc1bf41',
      '/assets/img/types/7-genuine/0637.png?checksum=a4555970fb41d786365884f77c465668',
      '/assets/img/types/7-genuine/0645.png?checksum=3b6f53104c6b8faabd07ce349d7ae0f4',
      '/assets/img/types/7-genuine/0650.png?checksum=449c8280586482393d07fb8f2807fd34',
      '/assets/img/types/7-genuine/0668.png?checksum=bfbaafc55b973cf8b92b1a5cce59ed0a',
      '/assets/img/types/7-genuine/0681.png?checksum=8cf87557dd0fa2bd582d60e013ff2abb',
      '/assets/img/types/7-genuine/0720.png?checksum=5df6ec52a5ca10fc2ccb14acd45dc804',
      '/assets/img/types/7-genuine/0740.png?checksum=79a438d6885f574f0c3303b67e28e945',
      '/assets/img/types/7-genuine/0755.png?checksum=0b2475503aab838d1994a4716a05756a',
      '/assets/img/types/7-genuine/0769.png?checksum=48d49a392487b8d0ca0021130f5bdce9',
      '/assets/img/types/7-genuine/1031.png?checksum=38a83e2876bf4ca69df65ff7031cc73b',
      '/assets/img/types/7-genuine/1053.png?checksum=3246f78d7ebe47b48e24425c264cc56f',
      '/assets/img/types/7-genuine/1184.png?checksum=baab945047402985251620ec07efe5d3',
      '/assets/img/types/7-genuine/1221.png?checksum=62b066270849feae05809399271abe0b',
      '/assets/img/types/7-genuine/1305.png?checksum=546a796628523bdaf5e248b034b461c0',
      '/assets/img/types/7-genuine/1315.png?checksum=b762005b481267c925d631c67cb8a73b',
      '/assets/img/types/7-genuine/1318.png?checksum=d5a5db02115ecc6176f77534581f42c3',
      '/assets/img/types/7-genuine/1331.png?checksum=1703536c764b82abf0e49fa2f5df5235',
      '/assets/img/types/7-genuine/1394.png?checksum=69fe1bec7a5718a6a79b7a25b66f0c1c',
      '/assets/img/types/7-genuine/1398.png?checksum=bead306ed6cb0d79aeb3ea01bff7efcf',
      '/assets/img/types/7-genuine/1412.png?checksum=d7906c227de307978fe95ca5f5143627',
      '/assets/img/types/7-genuine/1426.png?checksum=8725858c471578207c39687790ecebf9',
      '/assets/img/types/7-genuine/1447.png?checksum=7d764c090de2b63d52f4d85c06965a1d',
      '/assets/img/types/7-genuine/1459.png?checksum=31f00748f364e6722d83f66759ae1063',
      '/assets/img/types/7-genuine/1512.png?checksum=d8cd80a60c409890ab304d8dc9cd3bac',
      '/assets/img/types/7-genuine/1530.png?checksum=dcd552d54ac264d663104163121c959c',
      '/assets/img/types/7-genuine/1545.png?checksum=ed93721c80955b13fb69c55cdde383cb',
      '/assets/img/types/7-genuine/1595.png?checksum=fdd0f515bba7cf885b6bacc1acfae6f3',
      '/assets/img/types/7-genuine/1599.png?checksum=f0b85fe886589ee4e5a818a7d6f37b11',
      '/assets/img/types/7-genuine/1626.png?checksum=34f4278f8920adc33e9f47870a9d2748',
      '/assets/img/types/7-genuine/1680.png?checksum=fe039fad89d64affd0fdedb8c4472438',
      '/assets/img/types/7-genuine/1696.png?checksum=c4979569192c15421c1b018616465190',
      '/assets/img/types/7-genuine/1710.png?checksum=68c0eb533fd4802861d2e8f4a7e8e9e6',
      '/assets/img/types/7-genuine/1739.png?checksum=9cdef73d89ed8ed52a06c34f4ca3b1c4',
      '/assets/img/types/7-genuine/1770.png?checksum=f842578f323153f920e992d34e83a7a1',
      '/assets/img/types/7-genuine/1793.png?checksum=107aa504564e9d758f71e56aeeea60b6',
      '/assets/img/types/7-genuine/1818.png?checksum=f17150f66acd825c36a4dd7969288113',
      '/assets/img/types/7-genuine/1868.png?checksum=fd365b5ca9bd3ad78be31f245e4f175d',
      '/assets/img/types/7-genuine/1917.png?checksum=13b296bc7cf5d7cce92249bc8ab477a1',
      '/assets/img/types/7-genuine/1930.png?checksum=774c8a291fc129167cf60103f72fd28c',
      '/assets/img/types/7-genuine/2001.png?checksum=5290eda5d56492849b7f75165ce8a5cf',
      '/assets/img/types/7-genuine/2034.png?checksum=29d30b32f7dc448726f53a855af63703',
      '/assets/img/types/7-genuine/2047.png?checksum=24a3cb72c5895341208a075c12055dd6',
      '/assets/img/types/7-genuine/2060.png?checksum=3d195530cc5e2ec689f15d2bfed51c11',
      '/assets/img/types/7-genuine/2212.png?checksum=231c4b8caa0e231135982b598c90bf02',
      '/assets/img/types/7-genuine/2299.png?checksum=8793ba4f6635db36afe337281416a454',
      '/assets/img/types/7-genuine/2304.png?checksum=0cfbeafc8ebe04635a7ed3947a242a23',
      '/assets/img/types/7-genuine/2332.png?checksum=0f14053d6cfbe594f9e4dac52b500ce7',
      '/assets/img/types/7-genuine/2365.png?checksum=d9cdd91bcc988956dbb5fd7073ba79aa',
      '/assets/img/types/7-genuine/2412.png?checksum=92d9f1e797b02dd2b7f01626f8a52eb6',
      '/assets/img/types/7-genuine/2629.png?checksum=9c9f90d9cb5cc863b4b98146afe140ca',
      '/assets/img/types/7-genuine/2633.png?checksum=6e19797d0ff8b31fbb57e0d3da291358',
      '/assets/img/types/7-genuine/2654.png?checksum=33c306948715c12ff997e81bbe4b82be',
      '/assets/img/types/7-genuine/2668.png?checksum=0441ae41326af5a0390455eb4f1ef7c4',
      '/assets/img/types/7-genuine/2733.png?checksum=279d3499d087f49e745b2b0e0b164635',
      '/assets/img/types/7-genuine/2743.png?checksum=4d24345f7c2cbdf09754cc048d1627c9',
      '/assets/img/types/7-genuine/2747.png?checksum=f235c8775a657ef839107576ad603707',
      '/assets/img/types/7-genuine/2808.png?checksum=d6dcd19618b50717450b8d3b70d81e95',
      '/assets/img/types/7-genuine/2874.png?checksum=8e92b6005c5f0a7c063c240b5934454b',
      '/assets/img/types/7-genuine/2933.png?checksum=006590624da2bab2dd6ab24cc4e218fd',
      '/assets/img/types/7-genuine/3078.png?checksum=694d3171e7f31a82cda4486bbc0fa575',
      '/assets/img/types/7-genuine/3081.png?checksum=f4ea21f475c6e60d5d595f35e671fa96',
      '/assets/img/types/7-genuine/3137.png?checksum=85aab12f937294b0d12bf89a89125c01',
      '/assets/img/types/7-genuine/3255.png?checksum=b619a857cbea61cee9ee3c54b10f9f35',
      '/assets/img/types/7-genuine/3330.png?checksum=ffab65f1fb72c0e0b9f8df470860706b',
      '/assets/img/types/7-genuine/3353.png?checksum=2b8f8329e812c53360f5e408410fe4b4',
      '/assets/img/types/7-genuine/3432.png?checksum=86866201d70b74f0bcdb06b18859aea0',
      '/assets/img/types/7-genuine/3531.png?checksum=62b32cd98e1ee3dde3fb997d7a3c40fc',
      '/assets/img/types/7-genuine/3544.png?checksum=5d182c770d9a1476665609c3a1316b35',
      '/assets/img/types/7-genuine/3587.png?checksum=b7ac252608ece49d4f5dbd6ccb88717e',
      '/assets/img/types/7-genuine/3719.png?checksum=e77bde7b155eee600a199d178223a48b',
      '/assets/img/types/7-genuine/3726.png?checksum=fd59451159887a549eb1d68a4026fe54',
      '/assets/img/types/7-genuine/3740.png?checksum=92eb29d1e42c77d491afd2d723b166c6',
      '/assets/img/types/7-genuine/3755.png?checksum=68efb4e2c95078d944f80590cc6a8374',
    ],
    title: 'Genuine',
    subtitle: '3150 pieces',
    description:
      'Every genuine emodus is unique by the combinations of its traits.',
  },
  {
    images: [
      '/assets/img/types/1-extremus/100.png?checksum=51600b4581e16490894765cab02c1758',
      '/assets/img/types/1-extremus/200.png?checksum=421f6f112e78eb3da24132eb73e80cf7',
      '/assets/img/types/1-extremus/300.png?checksum=19e886ef230db42e8cd21451d898c384',
      '/assets/img/types/1-extremus/400.png?checksum=6658b00dc4f250f3efc95ec3c7641a27',
      '/assets/img/types/1-extremus/500.png?checksum=b4561c20d700af095a0ad2ceee95033a',
      '/assets/img/types/1-extremus/600.png?checksum=346282f745e82fd8a4b0da6f8215c2aa',
    ],
    title: 'Modus Extremus',
    subtitle: '6 pieces',
    description: 'Hyper-expressionists of six core emotions.',
  },
  {
    images: [
      '/assets/img/types/2-snap/0020.png?checksum=e289a07bfd2a5b283ad8e2d6a4346df9',
      '/assets/img/types/2-snap/0022.png?checksum=ad1f305ad62bb9da595f797e7ebc4633',
      '/assets/img/types/2-snap/0023.png?checksum=63a90e0c4b56f5850ae0304383901fe4',
      '/assets/img/types/2-snap/0024.png?checksum=77cb064dc72ea5a5562983eed5ac6abb',
      '/assets/img/types/2-snap/0028.png?checksum=4786190e9393d07fd59ffb34b38d9883',
      '/assets/img/types/2-snap/0030.png?checksum=667e42fcb34eb31ce448517422cb8d5b',
      '/assets/img/types/2-snap/0031.png?checksum=6bc3b39ce4480eb30917786f4636efed',
      '/assets/img/types/2-snap/0033.png?checksum=f75a971b8aa7d4c501f7807e51563f6b',
      '/assets/img/types/2-snap/0036.png?checksum=8f30b6feffafef22c9ecaa858ee53a76',
      '/assets/img/types/2-snap/0040.png?checksum=3e9dbaea972dec55d8ab4fc58746e85c',
      '/assets/img/types/2-snap/0041.png?checksum=49da82f860a4a20ab6b92c6daeb0e1dc',
      '/assets/img/types/2-snap/0042.png?checksum=c4de2612764eba2d1ade9395a21972a6',
      '/assets/img/types/2-snap/0043.png?checksum=f61c1bb0e3ec1975469c97c88653dc6e',
      '/assets/img/types/2-snap/0044.png?checksum=976fa177e1c83f20242c6840b73051e6',
      '/assets/img/types/2-snap/0046.png?checksum=e0473d51df5cbd5524903228d0742990',
      '/assets/img/types/2-snap/0050.png?checksum=3dabd73d8fdb7e70f890342f2b2c8346',
      '/assets/img/types/2-snap/0051.png?checksum=e4510570b7556aebf3e021fdb950def3',
      '/assets/img/types/2-snap/0052.png?checksum=0ff63b269d869a59551b2d48e176598a',
      '/assets/img/types/2-snap/0061.png?checksum=41db264b0fe402d8d151748d1bf953b3',
      '/assets/img/types/2-snap/0062.png?checksum=a9d96db4c422a0ff525c6ad841d8f53f',
      '/assets/img/types/2-snap/0063.png?checksum=76b43ec43f48d0c6883dc4c93051f8eb',
      '/assets/img/types/2-snap/0064.png?checksum=d79084cd86aeb0197dac1983a18a303e',
      '/assets/img/types/2-snap/0065.png?checksum=4bac4e23c13cf38222fbf22563cd6836',
      '/assets/img/types/2-snap/0066.png?checksum=4db2b35973a18a84d80837459589b202',
      '/assets/img/types/2-snap/0067.png?checksum=ea8d26a90a2620143060c37213c63982',
      '/assets/img/types/2-snap/0068.png?checksum=f95db898652827070597eb7b6615e0fa',
      '/assets/img/types/2-snap/0071.png?checksum=b1273acd9705473e4dcb92f394033964',
      '/assets/img/types/2-snap/0072.png?checksum=80c7cf3a9cb3969edbe865516b1b94da',
      '/assets/img/types/2-snap/0073.png?checksum=f39be8ced3655318a9245ba6a5c449ed',
      '/assets/img/types/2-snap/0074.png?checksum=fc0336ac47dbaaf6caf394d8ef70f4ad',
      '/assets/img/types/2-snap/0077.png?checksum=808fe45624e0b5f72ab2985656eaf1de',
      '/assets/img/types/2-snap/0078.png?checksum=4ab898479a60c4fef79a1f849f2368d5',
      '/assets/img/types/2-snap/0081.png?checksum=5f4538bd21893846e21e6444e8292f73',
      '/assets/img/types/2-snap/0084.png?checksum=25205dd31b7179c752aaabf2b38e9126',
      '/assets/img/types/2-snap/0085.png?checksum=aa0ecf7b229405a9dbab4ea73522b6dc',
      '/assets/img/types/2-snap/0086.png?checksum=94da073d391c169160067a5eab712e71',
      '/assets/img/types/2-snap/0087.png?checksum=ab7bfc00aebafb4fa18de6f564c714b9',
      '/assets/img/types/2-snap/0088.png?checksum=50d7f2d4d44b43ee735c99c3be37f841',
      '/assets/img/types/2-snap/0089.png?checksum=f677c51035e4ebed6a243605f40b4f15',
      '/assets/img/types/2-snap/0090.png?checksum=948e153bedaeae09d8dbaf68d914efd6',
      '/assets/img/types/2-snap/0092.png?checksum=698614dfb9b4cec1dcb3095206cafd4d',
      '/assets/img/types/2-snap/0094.png?checksum=79844d73b26b5ba3194a2e0f1dff0c96',
      '/assets/img/types/2-snap/0096.png?checksum=381c0e2f801a321825772153546d6351',
      '/assets/img/types/2-snap/0098.png?checksum=5ddae84f5565062025d5a557f08927bc',
      '/assets/img/types/2-snap/0099.png?checksum=70a6692501a478bb0bb67108c3e3ce33',
      '/assets/img/types/2-snap/0101.png?checksum=a1482faa45179562531a7cce0e3ca9b3',
      '/assets/img/types/2-snap/0102.png?checksum=b318bbb3b3f8cfbbddcfb89aa0c8d688',
      '/assets/img/types/2-snap/0105.png?checksum=72ba08a2b7ffddfe778327f6e299c015',
      '/assets/img/types/2-snap/0108.png?checksum=fffe69b2fe08c155ff530ef0899825ad',
      '/assets/img/types/2-snap/0109.png?checksum=db5fb730e22dd47483578a6307b9bb08',
      '/assets/img/types/2-snap/0663.png?checksum=f8f1c54e0afd51ff4b3de0227e63c755',
      '/assets/img/types/2-snap/0711.png?checksum=e3ed21c4c4d0c715afd19a4afa232579',
      '/assets/img/types/2-snap/1208.png?checksum=81256ac0feede8474d51abd54844bc50',
      '/assets/img/types/2-snap/1573.png?checksum=7cf8091938ecff83968d3c18577e1d5b',
      '/assets/img/types/2-snap/2091.png?checksum=a3e666cab018e9d6a5b2ac66c85ab46d',
      '/assets/img/types/2-snap/2931.png?checksum=c03a80e98164dd1adc57989926c41eb6',
      '/assets/img/types/2-snap/3028.png?checksum=0cbd6d300fc7fb7afc3d9b77c2686474',
      '/assets/img/types/2-snap/3029.png?checksum=b1d9a899fbec857bf1c2f6eb06079642',
      '/assets/img/types/2-snap/3112.png?checksum=c0d38aaff1d12a08d5320df47558127c',
    ],
    title: 'Modus Snap',
    subtitle: '90 pieces',
    description:
      'Total harmony of facial expression matching with environment, body status’ and core emotion.',
  },
  {
    images: [
      '/assets/img/types/3-all-eyes-on-you/0254.png?checksum=3c610ad41e370b6fc598e837fa532e33',
      '/assets/img/types/3-all-eyes-on-you/0260.png?checksum=77acc7bd0a0842380f057f7cbf98a530',
      '/assets/img/types/3-all-eyes-on-you/0281.png?checksum=6461c7740496a9e9d256cc08452e762e',
      '/assets/img/types/3-all-eyes-on-you/0283.png?checksum=cd97ecae1d30a067dbc7104bb248836d',
      '/assets/img/types/3-all-eyes-on-you/0286.png?checksum=48f95738c4705f0453d38cf5279fbf93',
      '/assets/img/types/3-all-eyes-on-you/0293.png?checksum=209b443d787f8bde58a4564d7d1b1257',
      '/assets/img/types/3-all-eyes-on-you/0302.png?checksum=8a66118430b2f33b6c47817fa560db10',
      '/assets/img/types/3-all-eyes-on-you/0303.png?checksum=8c48f26d327cdeb3d2c1aed6462eb0d9',
      '/assets/img/types/3-all-eyes-on-you/0309.png?checksum=41a30a708446fd47a69542058cf9c9f9',
      '/assets/img/types/3-all-eyes-on-you/0314.png?checksum=26fab8abdbc539895361f62715155db0',
      '/assets/img/types/3-all-eyes-on-you/0325.png?checksum=7f6cfaacb2de37329cd1e90aeb4fde18',
      '/assets/img/types/3-all-eyes-on-you/0336.png?checksum=c94342940acbee32dd54d4ffef11f662',
      '/assets/img/types/3-all-eyes-on-you/0342.png?checksum=8c13d35d01612016c367adc93c850006',
      '/assets/img/types/3-all-eyes-on-you/0346.png?checksum=8dd33bdd5b6928b292914b993b4dcb94',
      '/assets/img/types/3-all-eyes-on-you/0353.png?checksum=c3c1cefe4f62dade2b3097954ea58757',
      '/assets/img/types/3-all-eyes-on-you/0357.png?checksum=87fc2aa22051046ba98496f2e4820bc0',
      '/assets/img/types/3-all-eyes-on-you/0365.png?checksum=1c2198d7894b831e4362833f281d30d3',
      '/assets/img/types/3-all-eyes-on-you/0390.png?checksum=a27fa6f5be38c6c05a13abb409a32c22',
      '/assets/img/types/3-all-eyes-on-you/0394.png?checksum=a096ef68ee0dd7cc8621b2ea15047e8a',
      '/assets/img/types/3-all-eyes-on-you/0413.png?checksum=37c288773f1c9d88828cc41cdb799842',
      '/assets/img/types/3-all-eyes-on-you/0423.png?checksum=272917c21f3ad415e8afdd1af4be878a',
      '/assets/img/types/3-all-eyes-on-you/0424.png?checksum=dbb606badd913c080e13a471133bc6d1',
      '/assets/img/types/3-all-eyes-on-you/0446.png?checksum=c85fe6ab3d666558e8f948e4e67925f9',
      '/assets/img/types/3-all-eyes-on-you/0463.png?checksum=649f5698854403e4460984533f323bc7',
      '/assets/img/types/3-all-eyes-on-you/0468.png?checksum=7cc920816c1888c12143751658ec3e29',
      '/assets/img/types/3-all-eyes-on-you/0476.png?checksum=7060ea1f0b84f114d646bb5665a7fabc',
      '/assets/img/types/3-all-eyes-on-you/0485.png?checksum=914ee93a9d9d357d0f4c2badd622bf69',
      '/assets/img/types/3-all-eyes-on-you/0494.png?checksum=f780d136c9e51bdd4d73bd1145baf41d',
      '/assets/img/types/3-all-eyes-on-you/0515.png?checksum=e8a5afae49eaa3e0bafb75486af03dd9',
      '/assets/img/types/3-all-eyes-on-you/0526.png?checksum=d58c876ac531269bea9c09080b0bef90',
      '/assets/img/types/3-all-eyes-on-you/0560.png?checksum=7c3ecba1716062a440bd42532df67858',
      '/assets/img/types/3-all-eyes-on-you/0575.png?checksum=da9356dfa4d7f5589da918a34b682652',
      '/assets/img/types/3-all-eyes-on-you/0589.png?checksum=fb7972d57b9b9b9d82ea1da52e3f827f',
    ],
    title: 'All Eyes On You',
    subtitle: '360 pieces',
    description:
      'Every move you make, every vow you break, every smile you fake, every claim you stake, this emodus will be watching you.',
  },
  {
    images: [
      '/assets/img/types/4-420/1420.png?checksum=d53a5448e95f6604f8a786cd3b0a0990',
      '/assets/img/types/4-420/24.png?checksum=fdc37bc461c6a57cf41e14f6c1725de7',
      '/assets/img/types/4-420/2420.png?checksum=94ca10b6baa3b0aa6695050373066ef8',
      '/assets/img/types/4-420/3420.png?checksum=4dea132df65f57df85f2f86331abbc3a',
      '/assets/img/types/4-420/42.png?checksum=056796f35dff0a055176a97866d71301',
      '/assets/img/types/4-420/420.png?checksum=4300918f851c9ca4cbea1240a7d4428b',
    ],
    title: '420',
    subtitle: '6 pieces',
    description: `You can't spell healthcare without “THC”.`,
  },
  {
    images: [
      '/assets/img/types/5-rollin/0111.png?checksum=0ae525bf381f37ca2b60fbe22c781066',
      '/assets/img/types/5-rollin/0132.png?checksum=eda6ea2dd2e73f27b98dd3fbc05983d3',
      '/assets/img/types/5-rollin/0134.png?checksum=67ecd52f28731533c92f919f345d697a',
      '/assets/img/types/5-rollin/0139.png?checksum=e0ed3333eb8d874d3da34ae3d077d3d9',
      '/assets/img/types/5-rollin/0141.png?checksum=1e2a0f1c168d94faac5c0974f27b1d4c',
      '/assets/img/types/5-rollin/0161.png?checksum=04df3b98259f61f73a3744f5a0ccd9df',
      '/assets/img/types/5-rollin/0163.png?checksum=ae38dacf1c34c22aef20a23aeb289e40',
      '/assets/img/types/5-rollin/0176.png?checksum=67693f0676ee2b0d34b5aa7029e27dd8',
      '/assets/img/types/5-rollin/0178.png?checksum=ab9434b541f5b1d8e76fb6212aaf9480',
      '/assets/img/types/5-rollin/0186.png?checksum=de0558f63ca98aabb5bdf5aef037d7a9',
      '/assets/img/types/5-rollin/0196.png?checksum=0f10642377a610c0c475c8744d9fe5ed',
      '/assets/img/types/5-rollin/0200.png?checksum=c72eb925bb7edf7265def12afd4b9b48',
      '/assets/img/types/5-rollin/0205.png?checksum=e6d98253c84402801adc5867902a31b6',
      '/assets/img/types/5-rollin/0225.png?checksum=9aecd2b302896cf833213a1c36f28fee',
      '/assets/img/types/5-rollin/0229.png?checksum=895a5ee9733c8f124c4549c164303fe5',
      '/assets/img/types/5-rollin/0233.png?checksum=f97dbfd0970f272cf7c3d10ff2bc82ae',
      '/assets/img/types/5-rollin/0238.png?checksum=85c5684cf029918d0523eb4754760c4f',
      '/assets/img/types/5-rollin/0243.png?checksum=24c1ef5618541e9d57eae04a5b283eac',
      '/assets/img/types/5-rollin/0253.png?checksum=aa052202bd88e917b245ba7223375781',
    ],
    title: `Rollin'`,
    subtitle: '144 pieces',
    description: `"No, I don't believe short-term memory loss is real. Anyway, have we prepared the stoner types?"`,
  },
  {
    images: [
      '/assets/img/types/6-pride/0014.png?checksum=f51985a84d3e3d52ef9d3a78bb34be1c',
      '/assets/img/types/6-pride/0015.png?checksum=52d54aff64ab5361ad478dc02d907aef',
      '/assets/img/types/6-pride/0016.png?checksum=0cfc68ffdf303898d2e6c762aa662dad',
      '/assets/img/types/6-pride/0017.png?checksum=bbf99d73ed83003015f24c7132e05613',
      '/assets/img/types/6-pride/0018.png?checksum=d6ee0f605cb511fca242db61b1c9330f',
      '/assets/img/types/6-pride/0019.png?checksum=66ee68c164cac62a2a5d467dd8c25f05',
    ],
    title: 'Pride',
    subtitle: '6 pieces',
    description:
      'No matter who they are or whom they love, we are proud of every emodus.',
  },
];

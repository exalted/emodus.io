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
                    connect wallet
                  </button>
                  <p className="text-center text-lg -mb-2">
                    {this.state.totalSupply || '_'} minted so far. Grab yours!
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
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-center text-lg">10 mints per wallet.</p>
                </div>
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
                desktopScroll('[data-type="page"]');
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
              src="/assets/img/yellow-emodus_desktop.png"
            />
            <SimpleDesktopSection className="pr-16 text-5xl">
              <p className="mb-6">
                Renaissance of meme art and a new "culture" phenomenon.
              </p>
              <button className="block w-fit m-auto border-4 px-6 py-2 rounded-full border-solid border-emodus-black font-fredoka font-semibold">
                connect wallet
              </button>
            </SimpleDesktopSection>
          </DesktopPage>

          {/* ======================================================================== */}
          {/* Blue */}
          {/* ======================================================================== */}
          <DesktopPage className="bg-emodus-blue flex-row-reverse">
            <DesktopPassportPhotoSection
              className="pr-24"
              src="/assets/img/orange-emodus_desktop.png"
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
              src="/assets/img/green-emodus_desktop.png"
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
              src="/assets/img/blue-emodus_desktop.png"
            />
            <SimpleDesktopSection className="pl-16 pr-4 text-4xl">
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
            <DesktopPassportPhotoSection
              className="pl-24"
              src="/assets/img/red-emodus_desktop.png"
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
            />
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Early stages of the Emodus got a spark from the work of Dr. Paul
              Ekman and Dr. Eve Ekman's "The Atlas of Emotions" which was
              commissioned by the Dalai Lama?? and from the work of Plutchik's
              "Wheel of Emotions"
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
            <img className="my-6" src="/assets/img/story-colors.svg" />
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
            <p className="text-3xl font-fredoka font-semibold mb-12">
              In order to narrate optimum facial expressions, we utilized only
              the most expressive organs: eyes with a supporting mouth; this
              proves that to express one's modus it doesn't need a nose, ear,
              facial hair or even accessories! Even though not all expressions
              are inter-culturally comprehensible, we believe everyone will find
              one part of self in the modus collection, since facial expressions
              of emotions are part of our evolutionary history and are a
              biologically innate ability."
            </p>
            <img className="mb-6" src="/assets/img/story-scheme.svg" />
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
          <DesktopPage className="bg-discover-background">
            <SimpleDesktopSection
              data-section="desktop-roadmap"
              className="text-5xl px-20"
            >
              <p className="mb-20">
                We believe that some NFT art collections should pass "we're
                building a community so strong we will overthrow the government"
                or "we'll be in the metaverse, matrix, and also on mars" or
                "this is the best return of investment ponzi-nomics" cliché.
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
            className={`${
              this.state.showRoadmap ? '!block' : 'hidden'
            } px-28 pt-20`}
            data-section="desktop-discover-roadmap"
          >
            <p className="text-center text-5xl mb-12">the roadmap</p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              We believe that some NFT art collections should pass "we're
              building a community so strong we will overthrow the government"
              or "we'll be in the metaverse, matrix, and also on mars" or "this
              is the best return of investment ponzi-nomics" cliché.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Emodus collection consists of wiselv created tiny pieces of
              artwork with a little bit of science, philosophy and humor sauce
              on it. Obviously not a project that copying blue chip strategies
              with clip art. It's unfortunate that the crowd that has gravitated
              to it, is not interested in digital art, and has treated it like a
              casino.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Why we don't prefer to start this with whitelist because whitelist
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
              Therefore 6% of all sales will be kept in the wallet and after the
              collection has been sold, we will be quided by the holders of
              Emodus who saw the potential and liked the concept.
            </p>
            <p className="text-3xl font-fredoka font-semibold mb-12">
              Holders will vote and decide whether the fund should be used for
              charity work or giving back to holders or to be used for other
              ideas that will be designated with the community.
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
                src="/assets/img/team-logo.svg"
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
        data-type="page"
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
        <img className="object-contain h-[160%] -mt-20" src={this.props.src} />
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
          src="/assets/img/modus-lisa.svg"
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
            className="absolute max-w-none -top-[9999px] -bottom-[9999px] -right-[9999px] -left-[9999px] m-auto pl-14 h-[70vh]"
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
      images: EMODUS_TYPES.map(({ images }) => _pickRandomFrom(images)),
    };
  }

  componentDidMount() {
    for (let index = 0; index < EMODUS_TYPES.length; index++) {
      const typeImages = EMODUS_TYPES[index].images;

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
        {EMODUS_TYPES.map(({ title, subtitle, description }, index) => (
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

class DesktopTypesSection extends React.Component {
  _intervals = [];

  constructor(props) {
    super(props);

    this.state = {
      images: EMODUS_TYPES.map(({ images }) => _pickRandomFrom(images)),
      selectedType: 0,
    };
  }

  componentDidMount() {
    this.props.onChange(EMODUS_TYPES[this.state.selectedType]);

    for (let index = 0; index < EMODUS_TYPES.length; index++) {
      const typeImages = EMODUS_TYPES[index].images;

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
      <div className="flex items-center">
        <button
          onClick={() => {
            const selectedType =
              (this.state.selectedType - 1) % EMODUS_TYPES.length;
            this.setState({ selectedType });
            this.props.onChange(EMODUS_TYPES[selectedType]);
          }}
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
          />
        </div>
        <button
          onClick={() => {
            const selectedType =
              (this.state.selectedType + 1) % EMODUS_TYPES.length;
            this.setState({ selectedType });
            this.props.onChange(EMODUS_TYPES[selectedType]);
          }}
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
      '/assets/img/types/1-extremus/100.png',
      '/assets/img/types/1-extremus/200.png',
      '/assets/img/types/1-extremus/300.png',
      '/assets/img/types/1-extremus/400.png',
      '/assets/img/types/1-extremus/500.png',
      '/assets/img/types/1-extremus/600.png',
    ],
    title: 'Modus Extremus',
    subtitle: '6 pieces',
    description: 'Hyper-expressionists of six core emotions.',
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
    title: 'Modus Snap',
    subtitle: '90 pieces',
    description:
      'Total harmony of facial expression matching with environment, body status’ and core emotion.',
  },
  {
    images: [
      '/assets/img/types/3-all-eyes-on-you/0254.png',
      '/assets/img/types/3-all-eyes-on-you/0260.png',
      '/assets/img/types/3-all-eyes-on-you/0281.png',
      '/assets/img/types/3-all-eyes-on-you/0283.png',
      '/assets/img/types/3-all-eyes-on-you/0286.png',
      '/assets/img/types/3-all-eyes-on-you/0293.png',
      '/assets/img/types/3-all-eyes-on-you/0302.png',
      '/assets/img/types/3-all-eyes-on-you/0303.png',
      '/assets/img/types/3-all-eyes-on-you/0309.png',
      '/assets/img/types/3-all-eyes-on-you/0314.png',
      '/assets/img/types/3-all-eyes-on-you/0325.png',
      '/assets/img/types/3-all-eyes-on-you/0336.png',
      '/assets/img/types/3-all-eyes-on-you/0342.png',
      '/assets/img/types/3-all-eyes-on-you/0346.png',
      '/assets/img/types/3-all-eyes-on-you/0353.png',
      '/assets/img/types/3-all-eyes-on-you/0357.png',
      '/assets/img/types/3-all-eyes-on-you/0365.png',
      '/assets/img/types/3-all-eyes-on-you/0390.png',
      '/assets/img/types/3-all-eyes-on-you/0394.png',
      '/assets/img/types/3-all-eyes-on-you/0413.png',
      '/assets/img/types/3-all-eyes-on-you/0423.png',
      '/assets/img/types/3-all-eyes-on-you/0424.png',
      '/assets/img/types/3-all-eyes-on-you/0446.png',
      '/assets/img/types/3-all-eyes-on-you/0463.png',
      '/assets/img/types/3-all-eyes-on-you/0468.png',
      '/assets/img/types/3-all-eyes-on-you/0476.png',
      '/assets/img/types/3-all-eyes-on-you/0485.png',
      '/assets/img/types/3-all-eyes-on-you/0494.png',
      '/assets/img/types/3-all-eyes-on-you/0515.png',
      '/assets/img/types/3-all-eyes-on-you/0526.png',
      '/assets/img/types/3-all-eyes-on-you/0560.png',
      '/assets/img/types/3-all-eyes-on-you/0575.png',
      '/assets/img/types/3-all-eyes-on-you/0589.png',
    ],
    title: 'All Eyes On You',
    subtitle: '360 pieces',
    description:
      'Every move you make, every vow you break, every smile you fake, every claim you stake, this Emodus will be watching you.',
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
    title: '420',
    subtitle: '6 pieces',
    description: `You can't spell healthcare without “THC”.`,
  },
  {
    images: [
      '/assets/img/types/5-rollin/0111.png',
      '/assets/img/types/5-rollin/0132.png',
      '/assets/img/types/5-rollin/0134.png',
      '/assets/img/types/5-rollin/0139.png',
      '/assets/img/types/5-rollin/0141.png',
      '/assets/img/types/5-rollin/0153.png',
      '/assets/img/types/5-rollin/0161.png',
      '/assets/img/types/5-rollin/0163.png',
      '/assets/img/types/5-rollin/0176.png',
      '/assets/img/types/5-rollin/0178.png',
      '/assets/img/types/5-rollin/0186.png',
      '/assets/img/types/5-rollin/0196.png',
      '/assets/img/types/5-rollin/0200.png',
      '/assets/img/types/5-rollin/0205.png',
      '/assets/img/types/5-rollin/0225.png',
      '/assets/img/types/5-rollin/0229.png',
      '/assets/img/types/5-rollin/0233.png',
      '/assets/img/types/5-rollin/0238.png',
      '/assets/img/types/5-rollin/0243.png',
      '/assets/img/types/5-rollin/0253.png',
    ],
    title: `Rollin'`,
    subtitle: '144 pieces',
    description: `"No, I don't believe short-term memory loss is real. Anyway, have we prepared the stoner types?"`,
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
    title: 'Pride',
    subtitle: '6 pieces',
    description:
      'No matter who they are or whom they love, we are proud of every emodus.',
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
    title: 'Genuine',
    subtitle: '3150 pieces',
    description:
      'Every genuine emodus is unique by the combinations of its traits.',
  },
];

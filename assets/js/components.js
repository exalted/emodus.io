'use strict';

const e = React.createElement;
const Fragment = React.Fragment;

class HomePage extends React.Component {
  render() {
    return (
      <div className="bg-red-600 flex flex-col">
        <div className="bg-green-600 h-24 fixed w-full">header</div>
        <div className="bg-blue-600 mt-24 snap-mandatory snap-y overflow-scroll h-screen">
          <Item bgColor="bg-amber-600">1</Item>
          <Item bgColor="bg-cyan-600">2</Item>
          <AnotherItem bgColor="bg-lime-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum arcu vitae elementum curabitur. Nibh nisl condimentum id
              venenatis a condimentum vitae sapien pellentesque. Dictum sit amet
              justo donec enim diam. Neque aliquam vestibulum morbi blandit.
              Blandit aliquam etiam erat velit scelerisque in dictum. Non
              consectetur a erat nam at lectus urna duis convallis. Quis viverra
              nibh cras pulvinar mattis nunc. Augue lacus viverra vitae congue
              eu. Lacus luctus accumsan tortor posuere ac ut consequat semper.
              Purus non enim praesent elementum facilisis. Mauris a diam
              maecenas sed enim. Venenatis urna cursus eget nunc scelerisque
              viverra mauris in aliquam. Massa sapien faucibus et molestie ac
              feugiat sed lectus. Sit amet consectetur adipiscing elit
              pellentesque habitant morbi tristique. Sed vulputate odio ut enim
              blandit volutpat maecenas. Suscipit tellus mauris a diam maecenas
              sed enim ut.
            </p>

            <p>
              Sed adipiscing diam donec adipiscing tristique. Nec ultrices dui
              sapien eget mi proin sed libero. Curabitur vitae nunc sed velit
              dignissim sodales. Sodales ut etiam sit amet. Duis at tellus at
              urna. Ut consequat semper viverra nam libero justo. Praesent
              elementum facilisis leo vel fringilla est ullamcorper eget. Nunc
              lobortis mattis aliquam faucibus purus. Nisl purus in mollis nunc
              sed. Urna id volutpat lacus laoreet non curabitur gravida arcu.
            </p>

            <p>
              Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. At
              in tellus integer feugiat scelerisque varius morbi enim nunc. Et
              sollicitudin ac orci phasellus. Semper auctor neque vitae tempus
              quam pellentesque nec. Porttitor massa id neque aliquam vestibulum
              morbi blandit. Lectus mauris ultrices eros in cursus turpis massa.
              Vitae ultricies leo integer malesuada nunc vel risus. Facilisi
              nullam vehicula ipsum a arcu cursus. Leo a diam sollicitudin
              tempor id eu nisl. Ac ut consequat semper viverra nam libero
              justo. A arcu cursus vitae congue mauris rhoncus aenean vel.
              Mattis enim ut tellus elementum sagittis vitae et leo. Morbi
              tristique senectus et netus et malesuada fames. Orci phasellus
              egestas tellus rutrum tellus pellentesque eu tincidunt. Felis
              bibendum ut tristique et egestas quis ipsum suspendisse ultrices.
              Id venenatis a condimentum vitae sapien pellentesque. Id aliquet
              risus feugiat in ante metus dictum at tempor. Feugiat nisl pretium
              fusce id velit ut. Facilisis gravida neque convallis a cras
              semper.
            </p>

            <p>
              Lectus quam id leo in vitae. Fames ac turpis egestas integer eget
              aliquet nibh. Diam volutpat commodo sed egestas egestas fringilla
              phasellus faucibus. Sollicitudin tempor id eu nisl nunc mi ipsum
              faucibus vitae. Lacus sed viverra tellus in hac. Malesuada fames
              ac turpis egestas integer eget aliquet nibh praesent. Tellus orci
              ac auctor augue mauris augue neque gravida in. Quis hendrerit
              dolor magna eget est lorem. Feugiat in ante metus dictum. Tempus
              urna et pharetra pharetra massa massa ultricies mi. Senectus et
              netus et malesuada fames ac turpis. Egestas dui id ornare arcu
              odio ut sem nulla pharetra. Vel risus commodo viverra maecenas
              accumsan lacus vel facilisis volutpat. Accumsan sit amet nulla
              facilisi. Nulla aliquet enim tortor at auctor. Ac tortor vitae
              purus faucibus ornare. At auctor urna nunc id. Donec et odio
              pellentesque diam. Pellentesque dignissim enim sit amet.
            </p>

            <p>
              Tellus at urna condimentum mattis pellentesque id nibh. Vitae
              justo eget magna fermentum iaculis eu. Sem viverra aliquet eget
              sit. Nibh nisl condimentum id venenatis. Purus non enim praesent
              elementum facilisis. Pharetra et ultrices neque ornare aenean
              euismod. Id interdum velit laoreet id donec ultrices tincidunt
              arcu. Semper risus in hendrerit gravida rutrum quisque non tellus
              orci. Gravida cum sociis natoque penatibus. Nulla facilisi etiam
              dignissim diam quis. Augue mauris augue neque gravida in fermentum
              et. Purus non enim praesent elementum facilisis leo.
            </p>

            <p>
              Nisi scelerisque eu ultrices vitae auctor eu. Volutpat lacus
              laoreet non curabitur. Felis eget velit aliquet sagittis. Vel
              pretium lectus quam id. Nunc scelerisque viverra mauris in aliquam
              sem. Ut placerat orci nulla pellentesque dignissim enim sit amet.
              Eu nisl nunc mi ipsum faucibus. Convallis a cras semper auctor
              neque. Libero enim sed faucibus turpis in eu mi bibendum neque.
              Sem integer vitae justo eget magna.
            </p>

            <p>
              Bibendum at varius vel pharetra vel. Quam id leo in vitae turpis
              massa sed. Felis imperdiet proin fermentum leo vel orci porta non
              pulvinar. Phasellus egestas tellus rutrum tellus pellentesque eu
              tincidunt. Mi proin sed libero enim sed faucibus turpis in eu.
              Amet mattis vulputate enim nulla aliquet porttitor. Morbi blandit
              cursus risus at ultrices. Aenean euismod elementum nisi quis
              eleifend quam adipiscing vitae proin. Id volutpat lacus laoreet
              non curabitur gravida arcu ac. Urna nunc id cursus metus aliquam
              eleifend mi in nulla.
            </p>

            <p>
              Lectus urna duis convallis convallis tellus id interdum. Egestas
              dui id ornare arcu odio ut sem nulla. Eu nisl nunc mi ipsum
              faucibus vitae aliquet nec ullamcorper. Enim eu turpis egestas
              pretium aenean pharetra. Nullam non nisi est sit amet. Tristique
              senectus et netus et malesuada. Diam volutpat commodo sed egestas
              egestas fringilla phasellus faucibus scelerisque. Condimentum
              lacinia quis vel eros. Scelerisque fermentum dui faucibus in
              ornare quam viverra. Vestibulum sed arcu non odio. Quis commodo
              odio aenean sed adipiscing diam donec adipiscing. Habitant morbi
              tristique senectus et netus et malesuada fames. Egestas sed tempus
              urna et pharetra pharetra massa massa ultricies. Proin sed libero
              enim sed faucibus turpis in.
            </p>

            <p>
              Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel.
              Nulla aliquet enim tortor at auctor urna nunc. Amet mauris commodo
              quis imperdiet massa tincidunt. Nascetur ridiculus mus mauris
              vitae ultricies. Viverra accumsan in nisl nisi scelerisque eu
              ultrices vitae auctor. Pretium viverra suspendisse potenti nullam
              ac tortor vitae purus. Iaculis nunc sed augue lacus viverra vitae
              congue. Dui nunc mattis enim ut tellus elementum sagittis vitae.
              Velit sed ullamcorper morbi tincidunt ornare massa eget. Tristique
              senectus et netus et malesuada fames ac turpis egestas. Elementum
              integer enim neque volutpat ac tincidunt. Arcu non sodales neque
              sodales ut etiam. Sapien faucibus et molestie ac feugiat sed
              lectus. Sed viverra tellus in hac habitasse platea dictumst
              vestibulum rhoncus. Ut eu sem integer vitae justo eget magna
              fermentum.
            </p>

            <p>
              Porta non pulvinar neque laoreet suspendisse interdum consectetur
              libero. Eu augue ut lectus arcu bibendum at. Enim nunc faucibus a
              pellentesque sit. Donec pretium vulputate sapien nec. Suspendisse
              interdum consectetur libero id faucibus nisl tincidunt. Sit amet
              venenatis urna cursus. Turpis nunc eget lorem dolor. Lobortis
              feugiat vivamus at augue. Sed sed risus pretium quam. Et leo duis
              ut diam quam. Viverra suspendisse potenti nullam ac. Consequat
              mauris nunc congue nisi. Tellus elementum sagittis vitae et. Vitae
              tortor condimentum lacinia quis vel eros. Non consectetur a erat
              nam at lectus urna duis. Etiam sit amet nisl purus in mollis.
            </p>

            <p>
              A iaculis at erat pellentesque adipiscing commodo elit at
              imperdiet. Eu feugiat pretium nibh ipsum consequat nisl vel
              pretium lectus. Turpis egestas pretium aenean pharetra magna ac
              placerat. Et leo duis ut diam quam nulla porttitor. A lacus
              vestibulum sed arcu non odio euismod lacinia. Velit sed
              ullamcorper morbi tincidunt. Vulputate mi sit amet mauris commodo
              quis. Sed libero enim sed faucibus turpis. Diam sit amet nisl
              suscipit. A lacus vestibulum sed arcu. Fermentum iaculis eu non
              diam phasellus vestibulum. Tortor vitae purus faucibus ornare
              suspendisse sed nisi lacus. Enim praesent elementum facilisis leo
              vel. Sit amet aliquam id diam maecenas ultricies mi eget mauris.
              Risus in hendrerit gravida rutrum. Vivamus at augue eget arcu
              dictum varius duis. Ut consequat semper viverra nam libero justo
              laoreet sit amet.
            </p>

            <p>
              Eu augue ut lectus arcu. Ac ut consequat semper viverra nam libero
              justo laoreet sit. Nisl tincidunt eget nullam non. Ut sem viverra
              aliquet eget. Elit sed vulputate mi sit. Eget sit amet tellus cras
              adipiscing enim eu turpis egestas. Non consectetur a erat nam at.
              Posuere ac ut consequat semper viverra nam libero justo laoreet.
              Magna ac placerat vestibulum lectus mauris ultrices. Nullam eget
              felis eget nunc lobortis mattis aliquam faucibus. Bibendum at
              varius vel pharetra vel turpis nunc eget. Egestas fringilla
              phasellus faucibus scelerisque eleifend donec. Viverra justo nec
              ultrices dui sapien eget mi. Dignissim suspendisse in est ante.
              Quam adipiscing vitae proin sagittis nisl. Non curabitur gravida
              arcu ac tortor dignissim.
            </p>

            <p>
              Pellentesque sit amet porttitor eget dolor. Non curabitur gravida
              arcu ac tortor dignissim convallis aenean et. Ut enim blandit
              volutpat maecenas volutpat blandit aliquam etiam. Massa ultricies
              mi quis hendrerit dolor magna eget est lorem. Sagittis nisl
              rhoncus mattis rhoncus urna. Risus in hendrerit gravida rutrum
              quisque non tellus orci. Cras fermentum odio eu feugiat pretium
              nibh. Placerat duis ultricies lacus sed turpis. Mauris in aliquam
              sem fringilla ut morbi tincidunt. Ullamcorper malesuada proin
              libero nunc consequat interdum. Eu feugiat pretium nibh ipsum
              consequat. Nibh nisl condimentum id venenatis a condimentum vitae
              sapien.
            </p>

            <p>
              Velit dignissim sodales ut eu. Est pellentesque elit ullamcorper
              dignissim cras tincidunt lobortis feugiat. Gravida dictum fusce ut
              placerat orci nulla pellentesque dignissim. Gravida neque
              convallis a cras semper auctor neque vitae tempus. Arcu odio ut
              sem nulla. Vitae elementum curabitur vitae nunc sed velit
              dignissim. Imperdiet nulla malesuada pellentesque elit eget. Ut
              etiam sit amet nisl purus. Aliquet lectus proin nibh nisl
              condimentum id venenatis a. Sit amet mauris commodo quis imperdiet
              massa tincidunt nunc pulvinar.
            </p>

            <p>
              Duis ut diam quam nulla. Morbi tempus iaculis urna id volutpat
              lacus laoreet non. Mauris pellentesque pulvinar pellentesque
              habitant morbi tristique senectus et netus. Fringilla urna
              porttitor rhoncus dolor purus. Diam quis enim lobortis scelerisque
              fermentum dui faucibus in. Mi eget mauris pharetra et ultrices
              neque ornare aenean euismod. Cum sociis natoque penatibus et
              magnis dis. Egestas congue quisque egestas diam in. Id diam vel
              quam elementum pulvinar etiam non quam lacus. Lobortis feugiat
              vivamus at augue eget. Molestie nunc non blandit massa enim nec
              dui nunc mattis. Urna cursus eget nunc scelerisque viverra. Turpis
              cursus in hac habitasse platea dictumst quisque. Cursus metus
              aliquam eleifend mi in nulla posuere sollicitudin. Convallis a
              cras semper auctor neque vitae tempus quam. Proin fermentum leo
              vel orci porta. Sed risus ultricies tristique nulla aliquet.
            </p>
          </AnotherItem>
          <Item bgColor="bg-fuchsia-600">3</Item>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <div
        className={`snap-start ${this.props.bgColor} h-screen flex items-center justify-center text-8xl`}
      >
        {this.props.children}
      </div>
    );
  }
}

class AnotherItem extends React.Component {
  render() {
    return (
      <div className={`snap-start ${this.props.bgColor} h-screen`}>
        {this.props.children}
      </div>
    );
  }
}

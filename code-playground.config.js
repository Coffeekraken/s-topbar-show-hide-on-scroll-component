module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-topbar-show-on-scroll-up-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <s-topbar-show-hide-on-scroll style="margin:0 0 40px 0">
          <header id="topbar">
            This is my cool topbar
          </header>
        </s-topbar-show-hide-on-scroll>

        <h1 class="h3 m-b-small">
          Coffeekraken s-topbar-show-on-scroll-up-component
        </h1>
        <p class="p m-b-bigger">
          Provide a simple way to create a topbar that display/hide itself on scroll up/down.
        </p>

        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
        <p class="p m-b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, consequat sed sollicitudin et, hendrerit viverra risus. Proin tincidunt ex ac ex mollis, vitae tincidunt libero tincidunt. Mauris luctus commodo commodo. In lacinia cursus congue. Praesent molestie lorem lacus, quis blandit metus dapibus id. Aliquam semper, elit vel efficitur lobortis, velit enim pulvinar felis, id convallis odio est et odio. In nec facilisis lectus, et egestas libero. Cras blandit nisl eu varius sodales. Vivamus et placerat est. Donec vitae vestibulum lectus, quis accumsan lacus. Donec tellus ex, accumsan in congue tincidunt, elementum in eros.
        </p>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';

        @include s-setup(());
        @include s-init();
        @include s-classes();
        @include s-typography-classes();

        body {
        }

        #topbar {
          background: white;
          padding: s-space(big);
          border-bottom: 1px solid #ddd;
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import 'webcomponents.js/webcomponents-lite'
        import STopbarShowOnScrollUpComponent from './dist/index'
      `
    }
  }
}

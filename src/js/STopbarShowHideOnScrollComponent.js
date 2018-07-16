import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import __throttle from 'coffeekraken-sugar/js/utils/functions/throttle'
import __scrollTop from 'coffeekraken-sugar/js/dom/scrollTop'
import __insertAfter from 'coffeekraken-sugar/js/dom/insertAfter'
import __getStyleProperty from 'coffeekraken-sugar/js/dom/getStyleProperty'

/**
 * Provide a simple way to create a topbar that display/hide itself on scroll up/down.
 * @example    html
 * <s-topbar-show-hide-on-scroll>
 *   <!-- my cool topbar here... -->
 * </s-topbar-show-hide-on-scroll>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default class STopbarShowHideOnScrollComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps () {
    return {

      /**
       * Specify the scroll up value needed to display the topbar
       * @prop
       * @type    {Integer}
       */
      scrollUp: 10

    }
  }

  /**
   * Css
   * @protected
   */
  static defaultCss (componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        transition: transform .2s ease-in-out 0s;
      }
    `
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount () {
    super.componentMount()

    // some internal variables
    this._currentTop = 0

    // get margin top and bottom of the topbar
    // to apply them to the placeholder
    const marginBottom = __getStyleProperty(this, 'margin-bottom')
    const marginTop = __getStyleProperty(this, 'margin-top')

    // create the placeholder and place it at the place of the
    // topbar
    this._placeholderElm = document.createElement('div')
    this._placeholderElm.classList.add(`${this.componentNameDash}__placeholder`)
    this._placeholderElm.style.height = this.offsetHeight + 'px'
    this._placeholderElm.style.marginTop = marginTop
    this._placeholderElm.style.marginBottom = marginBottom
    __insertAfter(this._placeholderElm, this)

    // prepare some functions to be listened
    this._onScrollFn = __throttle(this._onScroll.bind(this), 100)
    this._onResizeWindowFn = __throttle(this._onResizeWindow.bind(this), 100)

    // listen for scroll and resize
    document.addEventListener('scroll', this._onScrollFn)
    window.addEventListener('resize', this._onResizeWindowFn)
  }

  /**
   * Component unmount
   * @definition    SWebComponent.componentUnmount
   * @protected
   */
  componentUnmount () {
    super.componentUnmount()

    // remove the placeholder
    this._placeholderElm.parentNode.removeChild(this._placeholderElm)

    // remove event listeners
    document.removeEventListener('scroll', this._onScrollFn)
    window.removeEventListener('resize', this._onResizeWindowFn)
  }

  /**
   * On scroll
   * @param    {Event}    e    The scroll event
   */
  _onScroll (e) {
    const newTop = __scrollTop()
    if (this._currentTop < newTop && newTop > this.offsetHeight) {
      this.style.transform = 'translateY(-100%)'
    } else if (newTop < this._currentTop - this.props.scrollUp) {
      this.style.transform = 'translateY(0)'
    }
    this._currentTop = newTop
  }

  /**
   * On resize
   * We resize the placeholder to fit to the topbar size
   * @param    {Event}    e    The resize event
   */
  _onResizeWindow (e) {
    this._placeholderElm.style.height = this.offsetHeight + 'px'
  }
}

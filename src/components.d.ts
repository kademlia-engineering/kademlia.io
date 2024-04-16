/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface LogoToken {
    }
    interface PageHome {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLLogoTokenElement extends Components.LogoToken, HTMLStencilElement {
    }
    var HTMLLogoTokenElement: {
        prototype: HTMLLogoTokenElement;
        new (): HTMLLogoTokenElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "logo-token": HTMLLogoTokenElement;
        "page-home": HTMLPageHomeElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface LogoToken {
    }
    interface PageHome {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "logo-token": LogoToken;
        "page-home": PageHome;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "logo-token": LocalJSX.LogoToken & JSXBase.HTMLAttributes<HTMLLogoTokenElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
        }
    }
}

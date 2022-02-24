/// <reference types="react" />
export default function ResponsiveImage(props: {
    /**
     * Alternative text to describe the image for screen readers or in situations
     * where the image cannot be loaded. This prop is required but under certain
     * circumstances an empty string is preferred.
     */
    alt: string;
    /**
     * Whether to render the AMP version of the image. See
     * https://amp.dev/documentation/components/amp-img/
     */
    amp?: boolean;
    /**
     * Passed verbatim to img or amp-img element as class attribute.
     */
    className?: string;
    /**
     * The rendered height of the image when CSS cannot be loaded or in very old
     * browsers. With `fallbackWidth`, it sets the aspect ratio for the image.
     * Therefore, it's critical to provide an accurate value. A good practice is
     * to set this at the largest size at which this image can be rendered.
     */
    fallbackHeight: number;
    /**
     * The rendered width of the image when CSS cannot be loaded or in very old
     * browsers. See `fallbackHeight`.
     */
    fallbackWidth: number;
    /**
     * Compression quality that will be passed to WordPress, 0-100. Defaults to 75.
     */
    quality?: number;
    /**
     * Desribes the width of the image slot to the browser. This can be
     * as simple as a pixel-based value (for an image slot that will have
     * a fixed width), or as complicated as a comma-separated list of
     * media conditions mapped to image slot widths.
     *
     * By default, `sizes` will be derived from the `fallbackWidth`,
     * which tells the browser the image slot will always have a fixed
     * width.
     *
     * Forwarded to the HTML image element verbatim.
     */
    sizes?: string;
    /**
     * URL of an image in the WordPress media library. Must support
     * resizing using the width (`w`), height (`h`) and crop (`crop`)
     * query parameters.
     */
    src: string;
    /**
     * Array containing two values: the smallest and the largest widths
     * at which the image is expected to be rendered, e.g. `[ 100, 200 ]`.
     *
     * For fixed-dimension images, pass the same value for the minimum
     * and maximum values, e.g. `[ 100, 100 ]`.
     */
    widthRange: [number, number];
}): JSX.Element;
//# sourceMappingURL=ResponsiveImage.d.ts.map
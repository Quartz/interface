/// <reference types="react" />
export default function FeatureCard(props: {
    /**
     * Optional smaller text below the component title. As an example, if the component title
     * is "The rise of employee activists," a relevant description might be "Employee
     * activists are transforming the workplace—and making companies better in the process."
     */
    description?: string;
    /**
     * Whether the card is for article content; passed through to TextGroup to
     * determine color and formatting. Defaults to `true`.
     */
    isArticle?: boolean;
    /**
     * Determines the aspect ratio of the image, e.g. whether it is sized for images that are taller
     * than they are wide.
     */
    isPortrait?: boolean;
    /**
     * A short phrase that accompanies the Hed. See [Kicker](/?path=/docs/kicker--default-story).
     */
    kicker?: string;
    /**
     * URL of an image in the WordPress media library. Must support
     * resizing using the width (`w`), height (`h`) and crop (`crop`)
     * query parameters.
     */
    thumbnailUrl: string;
    /**
     * Shows a typical "play" icon overlaid onto the component image. Use when the card represents
     * video content.
     */
    showPlayIcon?: boolean;
    /**
     * Determines the size of the title text and the expected size & dimensions of the image to be
     * rendered. The 'small' size will optimize the image for smaller contexts, such as content lists
     * at mobile sizes. 'Large' and 'portrait' sizes will optimize for contexts such as Guide cards
     * and content lists at desktop sizes. See [ResponsiveImage](/?path=/docs/responsiveimage--default-story).
     */
    size: 'small' | 'medium' | 'large';
    /**
     * Primary text, used in TextGroup as Hed. See [Hed](/?path=/docs/hed--default-story).
     */
    title: string;
}): JSX.Element;
//# sourceMappingURL=FeatureCard.d.ts.map
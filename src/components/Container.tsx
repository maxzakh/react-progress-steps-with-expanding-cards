import { HTMLAttributes } from "react";
import { ImageUrls } from "../store/gallery-data";
import { classNames } from "../utils/classnames";

export function Container({ className, imageUrls, ...rest }: { imageUrls: ImageUrls; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("flex space-x-4", className)} {...rest}>
            {imageUrls.map((url, idx) => (
                <div className="" key={idx}>
                    <img src={url} alt="gallery image" />
                </div>
            ))}
        </div>
    );
}
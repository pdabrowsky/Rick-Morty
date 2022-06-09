import { ReactNode } from "react";

import css from "./PageContent.module.css";
import cs from "classnames";

type Props = {
	children: ReactNode;
	className?: string;
};

const PageContent = ({ children, className }: Props) => {
	return <div className={cs(css.wrapper, className)}>{children}</div>;
};

export { PageContent };

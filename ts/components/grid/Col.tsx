import * as React from "react";
import * as classNames from "classnames";
export default class Col extends React.Component<any,any> {
    /**
     * 删格布局容器
     */
    render() {
        const {children,span,flex,className} = this.props;
        let typeCol = 'ui-col-';
        let addClassName = className;
        let Cls = classNames('ui-col', {
            [`${typeCol}${span}`]: span&&true,
            [`${typeCol}${flex}`]: flex&&true,
            [`${addClassName}`]: className
        });
        return (<div className = {Cls} >
                    {children}
                </div>
                    );
    }

}
import React from 'react';
import _ from 'lodash';
// Sy - Sub-Components
import { Link } from 'react-router-dom';

/**
 * Sy - 1. SelectCIMItem
 */
export const SelectCIMItem = props => {
  const {titleBlk, list, activeId, handleClick} = props
  return (
	<div className="select-list-block">
		<div className="select-list-title p-2">
			<h6>{titleBlk}</h6>
		</div>
		<div className="scroll-blk">
		<div className="list-group">
			{list.map(function(item, i){
				return <Link 
						className={"list-group-item" + ((activeId==item.value) ? ' active' : '')}
						to="javascript:;" 
						key={"s-"+i}
						onClick={(e) => handleClick(e, item)}>
						{item.name}</Link>;
    		})}
		</div>
		</div>
	</div>
  )
}

/**
 * Sy - 2. SelectCIMItem
 */
export const SelectMultiItem = props => {
	const {titleBlk, list, activeId, handleClick, allClick, noneClick} = props
	return (
		<div className="select-list-block multi-choices">
			<div className="select-list-title group-item p-2 clearfix">
				<h6>{titleBlk}</h6>
				<div className="l-tool">
					<Link 
						to="javascript:;"
						onClick={(e) => allClick(e)} 
						>All</Link>
					&nbsp;|&nbsp;
					<Link 
						to="javascript:;" 
						onClick={(e) => noneClick(e)}
						>None</Link>
				</div>
			</div>
			<div className="scroll-blk">
			<div className="list-group">
				{(activeId.length > 0) && list.map(function(item, i){
					let activate = -1;
					activate = _.findIndex(activeId, function(o) { return o.value == item.value; });
					return <Link 
						className={"list-group-item" + ((activate>=0) ? ' active' : '')}
						to="javascript:;" 
						key={"s-"+i}
						onClick={(e) => handleClick(e, item)}>
						<p>
							<i className={" " + ((activate>=0) ? 'fa fa-check-square' : 'far fa-square')}></i>
							{item.name}
						</p></Link>;
				})}
				{(activeId.length == 0) && list.map(function(item, i){
					return <Link 
						className="list-group-item"
						to="javascript:;" 
						key={"s-"+i}
						onClick={(e) => handleClick(e, item)}>
						<p>
							<i className="far fa-square"></i>
							{item.name}
						</p></Link>;
    		})}
			</div></div>
		</div>
	)
  }



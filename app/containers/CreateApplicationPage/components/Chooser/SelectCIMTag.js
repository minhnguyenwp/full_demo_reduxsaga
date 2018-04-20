import React from 'react';
import { connect } from 'react-redux';

// Sy - Sub-Components
import { Link } from 'react-router-dom';

const Tags = (props) => {
	const {tags} = props
	return (
		<div className='tag-item'>
		{tags.map(function(itm, i){
			return (
				<Link key={'tag-itm-'+i} 
					className="btn btn-sm btn-warning" 
					to="#"
					onClick={(e) => {e.preventDefault(); return;}}
					>
					<span >{itm.displayName}</span>
					&nbsp;&nbsp;<i onClick={(e) => props.clkRemoveTag(e, itm)} className="fas fa-times"></i>
				</Link>
			)
		})}
		</div>
	)
}

const GroupTags = (props) => {
	const {listGrp, clkRemove, clkRemoveTag} = props
	console.log('listGrp', listGrp);
	return (
		<div>
			{listGrp.map(function(item, i){
				return (
					<div key={"tag-blk-" + i} 
						className='tag-block'>
						<div className="tag-title py-2">
							<h5>{item.nameGroup}</h5>
							<Link 
								onClick={(e) => clkRemove(e, item)}
								to="#" 
								className='txt-cmd cblue'>Remove</Link>
						</div>
						{(item.tags.length > 0) &&
							<Tags tags={item.tags} clkRemoveTag={clkRemoveTag}/>
						}
					</div>
				)
			})}
		</div>
	)
}
/**
 * Sy - Tags Collection
 */
class SelectCIMTag extends React.Component {

	render() {
  		const { dataItm, clkRemove, clkRemoveTag } = this.props
  
  		return (
			<div className="grouptag-blk">
				{(dataItm.length > 0) &&
					<GroupTags 
						listGrp={dataItm} 
						clkRemove={clkRemove}
						clkRemoveTag={clkRemoveTag}/>
				}
			</div>
		)
	}
}

export default SelectCIMTag;
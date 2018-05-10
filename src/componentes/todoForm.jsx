import React from 'react'
import Grid from './grid'
import IconButton from './iconButton'
 
export default props => {
	const keyHandler = (e) => {
		if (e.key === 'Enter') {
			e.shiftKey ? props.handleSearch() : props.handleAdd()
		} else if (e.key === 'Escape') {
			props.handleClear()
		}
	}

	return (
		<div role='form' className='todoForm'>

			<Grid cols='12 9 10'>

			
				<input id='desciprtion' className='form-control'
					placeholder='Adicone uma tarefa'
					onChange={props.handleChange}
					onKeyUp = {keyHandler}
					value={props.description}></input>
			
			</Grid>

			<Grid cols='12 3 2'>
			
				<IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
				<IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
				<IconButton style='danger' icon='close' onClick={props.handleClear}></IconButton>
			</Grid>
		</div>
	)
}
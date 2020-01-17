import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Icon } from 'native-base'
import DatepickerExample from '../components/Datepicker'

const { width } = Dimensions.get('window')

const Item = ({ inCompleteTodo, completeTodo, textValue, id, deleteTodo, isCompleted, dateValue}) => {
	toggleItem = () => {
		if (isCompleted) {
			inCompleteTodo(id)
		} else {
			completeTodo(id)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
            	<Text
					style={[
						styles.text,
						{
							opacity: isCompleted ? 0.5 : 1.0,
							textDecorationLine: isCompleted ? 'line-through' : 'none',
							color: isCompleted ? '#7A7AF6' : '#4F50DC'
						}
					]}
				>
					{textValue}



					</Text>
			</View>
			<TouchableOpacity onPressOut={() => deleteTodo(id)}>
				<Icon name='md-trash' style={{ color: '#ABADF9', paddingRight: 10 }} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderBottomColor: '#5859f2',
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	text: {
		color: '#4F50DC',
		fontSize: 18,
		marginVertical: 10,
		paddingLeft: 20,
		width: 300
	},

	rowContainer: {
		flexDirection: 'row',
		width: width / 10,
		alignItems: 'center'
	}
})

export default Item

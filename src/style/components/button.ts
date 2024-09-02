import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
	paddingY: 3,
	paddingX: "55px",
	bg: "rgba(245, 100, 151, 0.06)",
	color: "#f56497",
	_hover: { bg: "rgb(187, 59, 106, 0.2)" },
	_active: {
		bg: "rgb(187, 59, 106, 0.2)",
	}
})

export const buttonTheme = defineStyleConfig({
	variants: { primary },
})
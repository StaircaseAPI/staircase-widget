import {
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Center,
    SimpleGrid,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ThemeTypings } from '@chakra-ui/styled-system'

interface Props {
    onColorPick: (color: string) => any
}

export const ColorPicker = ({ onColorPick }: Props) => {
    const [color, setColor] = useState('gray.200')

    const colors: ThemeTypings['colorSchemes'][] = [
        'gray.200',
        'gray.300',
        'gray.400',
        'gray.500',
        'gray.600',

        'orange.200',
        'orange.300',
        'orange.400',
        'orange.500',
        'orange.600',

        'yellow.200',
        'yellow.300',
        'yellow.400',
        'yellow.500',
        'yellow.600',

        'green.200',
        'green.300',
        'green.400',
        'green.500',
        'green.600',

        'cyan.200',
        'cyan.300',
        'cyan.400',
        'cyan.500',
        'cyan.600',

        'blue.200',
        'blue.300',
        'blue.400',
        'blue.500',
        'blue.600',

        'purple.200',
        'purple.300',
        'purple.400',
        'purple.500',
        'purple.600',
    ]

    useEffect(() => {
        onColorPick(color)
    }, [color])

    return (
        <Center marginTop={5}>
            <Popover variant="picker">
                <PopoverTrigger>
                    <Button
                        aria-label={color}
                        background={color}
                        height="22px"
                        width="22px"
                        padding={0}
                        minWidth="unset"
                        borderRadius={3}
                    />
                </PopoverTrigger>
                <PopoverContent width="170px">
                    <PopoverArrow bg={color} />
                    <PopoverCloseButton color="white" />
                    <PopoverHeader
                        height="100px"
                        backgroundColor={color}
                        borderTopLeftRadius={5}
                        borderTopRightRadius={5}
                        color="white"
                    >
                        <Center height="100%">{color}</Center>
                    </PopoverHeader>
                    <PopoverBody height="240px">
                        <SimpleGrid columns={5} spacing={2}>
                            {colors.map((c) => (
                                <Button
                                    key={c}
                                    aria-label={c}
                                    background={c}
                                    height="22px"
                                    width="22px"
                                    padding={0}
                                    minWidth="unset"
                                    borderRadius={3}
                                    _hover={{ background: c }}
                                    onClick={() => {
                                        setColor(c)
                                    }}
                                />
                            ))}
                        </SimpleGrid>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Center>
    )
}

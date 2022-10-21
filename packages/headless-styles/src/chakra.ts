import { ChakraAlert } from './components/Admonition/chakraAlert'
import { ChakraAvatar } from './components/Avatar/chakraAvatar'
import { ChakraBadge } from './components/Badge/chakraBadge'
import { ChakraButton } from './components/Button/chakraButton'
import { ChakraCheckbox } from './components/Checkbox/chakraCheckbox'
import { ChakraErrorMessage } from './components/ErrorMessage/errorMessageJS'
import { ChakraFieldMessage } from './components/FieldMessage/fieldMessageJS'
import { ChakraFormControl } from './components/FormControl/formControlJS'
import { ChakraFormLabel } from './components/FormLabel/chakraFormLabel'
import { ChakraIcon } from './components/Icon/iconJS'
import { ChakraInput } from './components/Input/chakraInput'
import { ChakraModal } from './components/Modal/chakraModal'
import { ChakraProgress } from './components/Progress/progressJS'
import { ChakraRadio } from './components/Radio/chakraRadio'
import { ChakraSelect } from './components/Select/chakraSelect'
import { ChakraSkeleton } from './components/Skeleton/skeletonJS'
import { ChakraSwitch } from './components/Switch/chakraSwitch'
import { ChakraTab } from './components/Tab/chakraTab'
import { ChakraTable } from './components/Table/chakraTable'
import { ChakraTag } from './components/Tag/chakraTag'
import { ChakraTextarea } from './components/Textarea/chakraTextarea'
import { ChakraTextLink } from './components/TextLink/chakraTextLink'
import { ChakraTooltip } from './components/Tooltip/chakraTooltip'

const Form = {
  parts: ['container', 'requiredIndicator', 'helperText'],
  baseStyle: {
    helperText: ChakraFieldMessage.baseStyle,
  },
}

export const chakraPSTheme = {
  components: {
    Alert: ChakraAlert,
    Avatar: ChakraAvatar,
    Badge: ChakraBadge,
    Button: ChakraButton,
    Checkbox: ChakraCheckbox,
    Form,
    FormControl: ChakraFormControl,
    FormErrorMessage: ChakraErrorMessage,
    FormLabel: ChakraFormLabel,
    Icon: ChakraIcon,
    Input: ChakraInput,
    Link: ChakraTextLink,
    Modal: ChakraModal,
    Progress: ChakraProgress,
    Radio: ChakraRadio,
    Select: ChakraSelect,
    Skeleton: ChakraSkeleton,
    Switch: ChakraSwitch,
    Table: ChakraTable,
    Tabs: ChakraTab,
    Tag: ChakraTag,
    Textarea: ChakraTextarea,
    Tooltip: ChakraTooltip,
  },
  fonts: {
    heading: 'PS TT Commons Roman',
    body: 'PS TT Commons Roman',
  },
}

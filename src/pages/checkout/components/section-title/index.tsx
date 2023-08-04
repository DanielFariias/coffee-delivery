import { ReactNode } from 'react'
import * as S from './styles'
import { RegularText } from '../../../../components/typography/regular-text'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <S.SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </S.SectionTitleContainer>
  )
}

import { CaretLeft, CaretRight } from 'phosphor-react';
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles';
import { getWeekDays } from '@/utils/getWeekDays';

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true });

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Novembro
          <span>2023</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekday) => (
              <th key={weekday}>{weekday}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  );
}



/**
 * Get current timezone
 */
export const getTimeZone = (): string => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

// ============================================================================
// DATE PARSING
// ============================================================================

export interface TimeType {
    date?: string;
    iso_date?: string;
    timestamp?: number;
}

/**
 * Check if string is pure HH:MM format
 */
export function isPureHHMM(str?: string | number | null | undefined): boolean {
    if (!str) return false;
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(String(str).trim());
}

/**
 * Parse date from various formats
 */
export function parseDateCorrectly(str?: Date | TimeType | string | number | null | undefined): Date | null {
    if (!str) return new Date();
    if (str instanceof Date) return new Date(str);
    if (typeof str == "object" && str?.timestamp) return parseDateCorrectly(str.timestamp);
    if (typeof str == "object" && str?.iso_date) return parseDateCorrectly(str.iso_date);
    if (typeof str == "object" && str?.date) return parseDateCorrectly(str.date);

    if (typeof str == "number") {
        if (str >= 1000000000000) return new Date(str);
        const multiplier = Math.pow(10, 11 - (String(str | 0)?.length || 11)) | 0;
        return new Date(str * multiplier);
    }

    if (typeof str == "string" && isPureHHMM(str)) {
        const m = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(str.trim());
        if (!m) return new Date();
        const [, hh, mm] = m;
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), Number(hh), Number(mm), 0, 0);
    }

    return new Date(String(str));
}

/**
 * Parse and get time as number
 */
export function parseAndGetCorrectTime(str?: Date | TimeType | string | number | null | undefined): number {
    if (!str) return Date.now();
    if (typeof str == "number") {
        if (str >= 1000000000000) return str;
        const multiplier = Math.pow(10, 11 - (String(str | 0)?.length || 11)) | 0;
        return str * multiplier;
    }
    if (str instanceof Date) return str.getTime();
    return parseDateCorrectly(str)?.getTime?.() ?? Date.now();
}

/**
 * Get ISO week number
 */
export const getISOWeekNumber = (input: Date | null | undefined): number | null => {
    if (!input) return null;
    const target = new Date(Date.UTC(input.getFullYear(), input.getMonth(), input.getDate()));
    const dayNumber = target.getUTCDay() || 7;
    target.setUTCDate(target.getUTCDate() + 4 - dayNumber);
    const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
    return Math.ceil((((target.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};



/**
 * Normalize schedule to TimeType
 */
export const normalizeSchedule = (value: TimeType | string | number | null | undefined): TimeType | null => {
    if (!value) return null;
    if (typeof value === "object" && (value.date || value.iso_date || value.timestamp)) {
        return value;
    }
    return { iso_date: String(value) };
};

/**
 * Format as time string (HH:MM)
 */
export const formatAsTime = (time: TimeType | string | number | null | undefined): string => {
    const normalized = normalizeSchedule(time);
    if (!normalized) return "";
    return parseDateCorrectly(normalized)?.toLocaleTimeString?.("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: getTimeZone()
    }) || "";
};

/**
 * Format as date string
 */
export const formatAsDate = (date: TimeType | string | number | null | undefined): string => {
    return parseDateCorrectly(date)?.toLocaleDateString?.("en-GB", {
        day: "numeric",
        month: "long",
        weekday: "long",
        year: "numeric",
        timeZone: getTimeZone()
    }) || "";
};

/**
 * Format as date time string
 */
export const formatDateTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
};


/**
 * Get comparable time value from various formats
 */
export const getComparableTimeValue = (value?: TimeType | Date | string | number | null | undefined): number => {
    if (value == null) return Number.NaN;
    if (typeof value === "number" && Number.isFinite(value)) return value;

    const date = parseDateCorrectly(value);
    if (date && !Number.isNaN(date?.getTime())) return date?.getTime() ?? 0;

    const match = String(value).match(/^(\d{1,2})(?::(\d{2}))?(?::(\d{2}))?/);
    if (match) {
        const hours = Number(match[1]) || 0;
        const minutes = Number(match[2]) || 0;
        const seconds = Number(match[3]) || 0;
        return ((hours * 60 + minutes) * 60 + seconds) * 1000;
    }

    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : Number.NaN;
};

/**
 * Check if value is a valid date
 */
export const isDate = (date: any): boolean => {
    const firstStep = date instanceof Date || (typeof date == "string" && date.match(/^\d{4}-\d{2}-\d{2}$/));
    let secondStep = false;
    try {
        secondStep = getComparableTimeValue(date) > 0;
    } catch {
        secondStep = false;
    }
    return Boolean((firstStep && secondStep) ?? false);
};


/**
 * Check if time is within range
 */
export const checkInTimeRange = (beginTime: Date, endTime: Date, currentTime: Date): boolean => {
    if (beginTime && endTime) {
        return getComparableTimeValue(beginTime) < getComparableTimeValue(currentTime) &&
               getComparableTimeValue(currentTime) < getComparableTimeValue(endTime);
    }
    if (beginTime) return getComparableTimeValue(beginTime) < getComparableTimeValue(currentTime);
    if (endTime) return getComparableTimeValue(currentTime) < getComparableTimeValue(endTime);
    return false;
};

/**
 * Check remaining time within max days
 */
export const checkRemainsTime = (beginTime: Date, endTime: Date, currentTime: Date, maxDays = 7): boolean => {
    let factorMasked = true;
    if (beginTime) factorMasked &&= getComparableTimeValue(currentTime) <= getComparableTimeValue(beginTime);
    if (endTime) factorMasked &&= getComparableTimeValue(currentTime) < getComparableTimeValue(endTime);
    if (maxDays) {
        const dateLimit = getComparableTimeValue(currentTime) + maxDays * 24 * 60 * 60 * 1000;
        factorMasked &&= getComparableTimeValue(beginTime) < getComparableTimeValue(dateLimit);
    }
    return factorMasked;
};

/**
 * Compute timeline order in general
 */
export const computeTimelineOrderInGeneral = (timeOfDay: TimeType | string | number | null | undefined, minTimestamp?: number): number | null => {
    const dayStart = getComparableTimeValue(timeOfDay) || 0;
    const normalized = (Number.isFinite(dayStart) ? dayStart : 0) - (minTimestamp || 0);
    return Math.round(normalized / (24 * 60 * 60 * 1000));
};

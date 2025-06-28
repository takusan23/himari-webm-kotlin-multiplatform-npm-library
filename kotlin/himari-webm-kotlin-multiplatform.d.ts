type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare function fixSeekableWebm(webmByteArray: not.exported.kotlin.js.Array<number>): not.exported.kotlin.js.Array<number>;
declare namespace not.exported.kotlin.js {
    class Array<T> {
        constructor();
        get length(): number;
        get _hashCode(): number;
        set _hashCode(value: number);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Array.$metadata$ {
        const constructor: abstract new <T>() => Array<T>;
    }
}
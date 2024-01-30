export interface GetValueFunction {(key: string) : string}; 

export interface SetValueFunction {(key: string, value: string) :void};

export interface HandleSubmitFunction {(event: Event) :void };
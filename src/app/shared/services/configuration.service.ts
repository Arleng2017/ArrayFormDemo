import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationServices implements OnDestroy {
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    private NamePrefix = new BehaviorSubject<any>([]);
    public shareNamePrefix = this.NamePrefix.asObservable();

    private Province = new BehaviorSubject<any>([]);
    public ShareProvince = this.Province.asObservable();

    private Dotos = new BehaviorSubject<any>([]);
    public shareTodo = this.Dotos.asObservable();

    constructor(private http: HttpClient) {
        this.loadSetup();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    private loadSetup() {
        this.loadNamePrefix();
        this.LoadProvince();
        this.loadTodo();
    }

    private loadNamePrefix() {
        this.http.get('assets/json/name-prefix.json')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(prefix => {
                this.NamePrefix.next(prefix);
            });
    }

    private LoadProvince() {
        this.http.get('assets/json/province.json')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(province => {
                this.Province.next(province);
            })
    }

    private loadTodo() {
        this.http.get('assets/json/todos.json')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(todos => {
                this.Dotos.next(todos);
            })
    }
}
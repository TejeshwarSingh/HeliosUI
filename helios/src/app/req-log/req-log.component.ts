import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ReqLogService } from '../services/req-log.service';

@Component({
  selector: 'app-req-log',
  templateUrl: './req-log.component.html',
  styleUrls: ['./req-log.component.css'],
})
export class ReqLogComponent {
  constructor(private reqLogService: ReqLogService) {}
  datalst:any[] = [];
  length = 5000;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent: PageEvent = new PageEvent;
  systemCd = '';
  where = '';
  msgReqText = '';
  msgRespText = '';

  //@ViewChild(MatPaginator)
 // paginator: any = MatPaginator;
  

  handlePageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    console.log(this.pageIndex);
    this.loadtable ();



  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  loadtable () {
    this.where = '';
    if (this.systemCd) { this.where = `{"systemCd": "${this.systemCd}"}`}
    
    this.reqLogService.getList(this.pageIndex,this.pageSize,this.where).subscribe(
      (res: any) => {this.datalst = res.data
        console.log(this.systemCd);
        
      }
    ); 
  }
  ngOnInit():void {
    this.loadtable ()
  } //

  clickMe() {
    console.log("Button clicked ");
    this.pageIndex = 0;
    this.loadtable ();
  }

  rowClicked(row:any) {
    console.log(row);
    console.log(row.msgReqText);
    this.msgReqText = JSON.stringify(JSON.parse(row.msgReqText),null,2);
    this.msgRespText = JSON.stringify(JSON.parse(row.msgRespText),null,2);
  }
/*
  ngAfterViewInit(){
    this.paginator.page
    .pipe(tap( () => this.loadtable() ))
    .subscribe();
  }
*/
 /* 
dataobj = this.reqLogService.getList().subscribe(
  (res: any) => {this.datalst = res.data

  }
); */

  /*
    {
      data: [
        {
          emailGroupId: null,
          projectCd: 'SPS',
          internalUrlVer: null,
          systemCd: 'SCTRACE_BATCH',
          messageType: null,
          dateModified: null,
          modifiedBy: null,
          dateCreated: '2023-01-15',
          createdBy: 'SCTRACE_BATCH',
          parentLogId: null,
          extRefId: null,
          itimsRefId: null,
          msgReqPayloads: null,
          msgReqType: null,
          msgRespText: null,
          msgReqText: null,
          extMsgId: null,
          internalMsgId: '23616A3D31D94222B85AC68E9BB16014',
          xUserName: 'SCTRACE_BATCH',
          queryString: null,
          pathInfo: '/products',
          serverName: '10.1.2.110',
          remoteAddress: '10.1.2.170',
          scriptName:
            '/timsservices/gtsrest/itims/systemcd/SCTRACE_BATCH/reference/api/1/projectcd/SPS',
          serverPort: '7070',
          resultMsg: null,
          resultStatus: 'SUCCESS',
          requestMethod: 'GET',
          logInfo:
            'GET_OWA_SERVICE_PATH: /timsservices/gtsrest/itims/systemcd/SCTRACE_BATCH/reference/api/1/projectcd/SPS/ module_name :ITIMS subject_name:REFERENCE systemcd    :SCTRACE_BATCH api_version :1 projectcd   :SPS projectid   :239',
          logDate: '2023-01-15T12:01:04.164Z',
          logId: 47394,
          keyname: null,
          internalSessionId: 'CD859C6006724856B82A6246FC9B58EB',
        },
        {
          emailGroupId: null,
          projectCd: 'BLS',
          internalUrlVer: null,
          systemCd: 'SCTRACE_BATCH',
          messageType: null,
          dateModified: null,
          modifiedBy: null,
          dateCreated: '2023-01-15',
          createdBy: 'SCTRACE_BATCH',
          parentLogId: null,
          extRefId: null,
          itimsRefId: null,
          msgReqPayloads: null,
          msgReqType: null,
          msgRespText: null,
          msgReqText: null,
          extMsgId: null,
          internalMsgId: 'CB376492F1CB4C3D9127FD1110DC4483',
          xUserName: 'SCTRACE_BATCH',
          queryString: null,
          pathInfo: '/products',
          serverName: '10.1.2.110',
          remoteAddress: '10.1.2.170',
          scriptName:
            '/timsservices/gtsrest/itims/systemcd/SCTRACE_BATCH/reference/api/1/projectcd/BLS',
          serverPort: '7070',
          resultMsg: null,
          resultStatus: 'SUCCESS',
          requestMethod: 'GET',
          logInfo:
            'GET_OWA_SERVICE_PATH: /timsservices/gtsrest/itims/systemcd/SCTRACE_BATCH/reference/api/1/projectcd/BLS/ module_name :ITIMS subject_name:REFERENCE systemcd    :SCTRACE_BATCH api_version :1 projectcd   :BLS projectid   :235',
          logDate: '2023-01-15T12:01:01.572Z',
          logId: 47392,
          keyname: null,
          internalSessionId: '7070B8C4FAF34AF8801599A1EB5AD2A2',
        },
      ],
      meta: {
        skip: '0',
        take: '2',
        more: true,
      },
    };
*/
   //this.respObj.data;
 // meta = this.respObj.meta;

  displayedColumns: string[] = [
    'logId',
    'systemCd',
    'requestMethod',
    'resultStatus',
    'parentLogId',
    'logDate',
  ];
}
